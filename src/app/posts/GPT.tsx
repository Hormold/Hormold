import Image from "next/image";
const slug = `make-gpt-3-work-for-you`
const title = `Make GPT-3 work for you`
const date = `2023 Feb 04`

function Post () {
	return (
	<>
	<h2><strong>Let GPT-3 write SQL queries for you.&nbsp;</strong>Text to SQL generator via GPT-3</h2>

<p>Hi! I have never written articles, this will be my first time.</p>
<Image src="https://cdn-images-1.medium.com/max/1600/1*UypOUzACyj4K3QUt1TIkRw.gif" alt="GPT-3" width={1600} height={900} layout="responsive" className="rounded" />
<p>At my job, we use PostgreSQL for data storage and often need to write many small, simple queries for the analytics department. I wanted to try GPT-3 and see how it could help with this task. However, using the&nbsp;<a href="https://platform.openai.com/playground" rel="noopener ugc nofollow" target="_blank">GPT-3 Playground</a>&nbsp;is inconvenient for this task because you need to manually describe the structure of all the tables first.</p>

<p>So, I decided to write a small script that would convert the database structure into a text query that could be used with instructions to create real SQL queries. I chose to use Python for this project because I wanted to try a new programming language.</p>

<p><em>I figured this would be a good way to try out a new programming language and try to write something useful.</em></p>

<p><strong>Here was the plan for solving the problem:</strong></p>

<ol>
	<li>Connect to the database and retrieve the table structure with fields and field comments</li>
	<li>Generate a text query based on the retrieved structure</li>
	<li>Wait for the user to enter a request</li>
	<li>Ask GPT-3 to generate a real SQL query by passing it the text query with the database structure and the user&rsquo;s request</li>
	<li>Allow the user to edit the received query and check it for errors (using&nbsp;<a href="https://sqlformat.org/" rel="noopener ugc nofollow" target="_blank">https://sqlformat.org/</a>)</li>
	<li>Run the query and display the result (with a minimal UI and the ability to export data for further analysis)</li>
</ol>

<p>Writing in new languages thanks to&nbsp;<a href="https://github.com/features/copilot" rel="noopener ugc nofollow" target="_blank">Copilot</a>&nbsp;(it based on&nbsp;<a href="https://openai.com/blog/openai-codex/" rel="noopener ugc nofollow" target="_blank">GPT-3 Codex model</a>) is a great experience, and I highly recommend trying it with any programming language you are new to.</p>

<p>For those who are unfamiliar with GPT-3: it is the most advanced neural network based on the GPT (Generative Pre-trained Transformer) principle. It can generate text, perform natural language processing tasks, solve image processing tasks, and more.</p>

<p>Andr&eacute;j Karpathy talks about how GPT-3 works in this video:&nbsp;<a href="https://www.youtube.com/watch?v=kCc8FmEb1nY" rel="noopener ugc nofollow" target="_blank">https://www.youtube.com/watch?v=kCc8FmEb1nY</a>.</p>

<p>Also, it is worth mentioning that this is the same network that powers ChatGPT (<a href="https://chat.openai.com/" rel="noopener ugc nofollow" target="_blank">https://chat.openai.com</a>).</p>

<p>To connect to the database and retrieve the table structure, I used the psycopg2 library, which was recommended to me by GPT-3. Before we get started, let&rsquo;s install all the necessary dependencies for the project:</p>

<p><code>pip install psycopg2 openai</code></p>

<p>Now, start with Schema class:</p>

<pre className="block whitespace-pre overflow-x-scroll">
class Schema:
  &quot;&quot;&quot;Generate SQL Schema from PostgreSQL&quot;&quot;&quot;
  
  def __init__(self, schema = &#39;public&#39;):
  &quot;&quot;&quot;Connect to PostgreSQL database&quot;&quot;&quot;
  self.schema = schema
  try:
   self.conn = psycopg2.connect(DATABASE_URL)
  except psycopg2.OperationalError as err:
   print(f&#39;Unable to connect!\n&#123;err&#125;&#39;)
   sys.exit(1)
  else:
   print(&#39;Connected to PostgreSQL database successfully.&#39;)
  self.cur = self.conn.cursor()
  self.comments = []
  self.tables = []
  self.columns = []</pre>

<p>Next, we retrieve the list of tables and their comments. Since comments are stored in a separate location in PostgreSQL, we need to execute an additional query to get all comments for all tables.</p>

<pre className="block whitespace-pre overflow-x-scroll break-words">
def get_tables(self):
 &quot;&quot;&quot;Get list of tables&quot;&quot;&quot;
 self.cur.execute(&quot;SELECT table_name FROM information_schema.tables WHERE table_schema = %s&quot;, (self.schema,))
 tables = self.cur.fetchall()
 self.tables = tables
 return tables

def get_all_comments(self):
 &quot;&quot;&quot;Get list of all comments&quot;&quot;&quot;
 self.cur.execute(&#39;select c.table_schema, c.table_name,  c.column_name, pgd.description from pg_catalog.pg_statio_all_tables as st inner join pg_catalog.pg_description pgd on (pgd.objoid = st.relid) inner join information_schema.columns c on (pgd.objsubid   = c.ordinal_position and c.table_schema = st.schemaname and c.table_name   = st.relname);&#39;)
 comments = self.cur.fetchall()
 self.comments = comments
 return comments</pre>

<p>Next, we obtain a list of fields and their data types for each table.</p>

<pre className="block whitespace-pre overflow-x-scroll">
def get_columns(self, table):
 &quot;&quot;&quot;Get list of columns for a table&quot;&quot;&quot;
 self.cur.execute(&quot;SELECT column_name, data_type FROM information_schema.columns WHERE table_schema = %s AND table_name = %s&quot;, (self.schema, table))
 columns = self.cur.fetchall()
 return columns</pre>

<p>We will generate the full structure of the base. In my repository on GitHub you can find the generation for the tables you need, but in this example I will simply generate the structure for all tables.</p>

<p><strong>The less extra tables are used in generation, the easier it is to get the correct result and the cheaper the request to the OpenAI API will cost.</strong></p>

<p>We compile all the information into a single string to create the text structure of the database:</p>

<pre className="block whitespace-pre overflow-x-scroll">
def index(self):
 &quot;&quot;&quot;Generate SQL Schema&quot;&quot;&quot;
 prompt = &#39;&#39;
 tables = self.get_tables()
 comments = self.get_all_comments()
 for table in tables:
  columns = self.get_columns(table[0])
  prompt += f&#39;The &quot;&#123;table[0]&#125;&quot; table has columns: &#39;
  for column in columns:
   cmnt = &#39;&#39;
   for comment in comments:
    if comment[0] == self.schema and comment[1] == table[0] and comment[2] == column[0]:
     cmnt = comment[3]
     break
   if cmnt == &#39;&#39;:
    prompt += f&#39;&#123;column[0]&#125; (&#123;column[1]&#125;), &#39;
   else:
    prompt += f&#39;&#123;column[0]&#125; (&#123;column[1]&#125; - &#123;cmnt&#125;), &#39;
  prompt = prompt[:-2] + &#39;. &#39;    
 return prompt</pre>

<p>We now have the text structure of the database. At this point, I created a simple UI using Vue and Bootstrap for ease of use with the API. You can see what it looks like in the first GIF at the beginning of the article.</p>

<p>The code for the UI is available in the&nbsp;<a href="https://github.com/Hormold/gpt-sql-box" rel="noopener ugc nofollow" target="_blank">GitHub repository</a>.</p>

<center className="m-5"><Image alt="" src="https://miro.medium.com/v2/resize:fit:1400/1*L7wHxkyj5m4KZlutzm5yzQ.png" width={700} height={126} className="rounded" /></center>

<p>For demonstration purposes, I will be using a simple text input, but you can use any other convenient method. We save the resulting class code in the schema.py file and then import it in the main.py file.</p>

<p>Remember to obtain an OpenAI API key to access the API. You can get one at:&nbsp;<a href="https://platform.openai.com/account/api-keys" rel="noopener ugc nofollow" target="_blank">https://platform.openai.com/account/api-keys</a>.</p>

<pre className="block whitespace-pre overflow-x-scroll break-words">
import openai
from schema import schema # Our class to generate schemas
openai.api_key = &#39;sk-......&#39; # Your api key
prompt = input(&#39;Enter prompt: &#39;)</pre>

<p>Now we need to properly address GPT-3 and tell what we expect from it. Here you need to connect your creativity in making a request. I was inspired by some requests I found during the implementation on the&nbsp;<a href="https://blog.seekwell.io/gpt3" rel="noopener ugc nofollow" target="_blank">seekwell.io blog</a>.</p>

<p>My request ends up looking like this:</p>

<blockquote>
<p>Given an input question, respond with syntactically correct PostgreSQL. Be creative but the SQL must be correct, not nessesary to use all tables. &#123;sql_schema&#125;\n\nInstructions: &#123;prompt&#125;\n\nSQL:</p>
</blockquote>

<p>Where is:</p>

<ol>
	<li>&#123;sql_schema&#125; &mdash; the base text structure we got earlier</li>
	<li>&#123;prompt&#125; &mdash; the user&rsquo;s input from CLI</li>
</ol>

<p>For example, we get the following request:</p>

<blockquote>
<p>Given an input question, respond with syntactically correct PostgreSQL. Be creative but the SQL must be correct, not nessesary to use all tables. The &ldquo;public&rdquo;.&rdquo;users&rdquo; table has columns: id (integer &mdash; user id), name (text &mdash; user name), email (text &mdash; user email). The &ldquo;public&rdquo;.&rdquo;posts&rdquo; table has columns: id (integer &mdash; post id), title (text &mdash; post title), body (text &mdash; post body), user_id (integer &mdash; user id). The &ldquo;public&rdquo;.&rdquo;comments&rdquo; table has columns: id (integer &mdash; comment id), body (text &mdash; comment body), post_id (integer &mdash; post id), user_id (integer &mdash; user id). Instructions: Give me all posts by user where email hosted on gmail.com SQL:</p>
</blockquote>

<p>As a result from GPT-3, we can get the following answer (<em>the example was generated by copilot at the time of writing the article, this is mind-blowing!</em>):</p>

<blockquote>
<p>SELECT * FROM posts WHERE user_id IN (SELECT id FROM users WHERE email LIKE &lsquo;%@gmail.com&rsquo;);</p>
</blockquote>

<p><strong>OK. How to do it in code!</strong></p>

<p>First, we need to set the correct set of parameters for the request in the GPT-3 API. We have these important parameters to pass into query:</p>

<ol>
	<li><strong>query_temperture -</strong>&nbsp;is the temperature that determines how much the model will experiment with the responses. The higher the temperature, the more experiments the model will do. The lower the temperature, the more specific the answers will be. I recommend using&nbsp;<strong>0.5&ndash;0.7</strong></li>
	<li><strong>max_tokens</strong>&nbsp;is the maximum number of tokens that the model can generate. I recommend using&nbsp;<strong>100&ndash;150</strong>&nbsp;if you don&rsquo;t expect a large SQL query to be returned.</li>
	<li><strong>engine</strong>&nbsp;is the model itself that we want to use. I recommend using davinci, but you can try other models like ada or babbage. The most recent version at the time of writing is&nbsp;<strong>text-davinci-003</strong>. Different models have different response quality and price, so I recommend using davinci if you have the opportunity.</li>
	<li><strong>prompt&nbsp;</strong>is what we would like to receive in response. In our case, this is the question we ask the user.</li>
	<li><strong>stop</strong>&nbsp;&mdash; gpt-3 will stop generating text when it encounters one of the stop tokens. In our case, we will use the \n\n token, which means that the model will stop generating text when it encounters two new lines.</li>
</ol>

<p>Let&rsquo;s now make a request to the GPT-3 API and get a response:</p>

<pre className="block whitespace-pre overflow-x-scroll break-words">
query_temperature = 0.5
final_prompt = f&#39;Given an input question, respond with syntactically correct PostgreSQL. Be creative but the SQL must be correct, not nessesary to use all tables.\n\n&#123;sql_schema&#125;\n\nInstructions: &#123;prompt&#125;\n\nSQL:\n&#39;
gpt_response = openai.completion.create(
  engine=&quot;text-davinci-003&quot;,
  prompt=final_prompt,
  temperature=float(query_temperture),
  max_tokens=150,
  stop=[&quot;\n\n&quot;]
)
print(f&#39;GPT-3 response: &#123;gpt_response[&quot;choices&quot;][0][&quot;text&quot;]&#125;&#39;)</pre>

<p>You can find the full implementation here:&nbsp;<a href="https://github.com/Hormold/gpt-sql-box/blob/master/cli.py" rel="noopener ugc nofollow" target="_blank">https://github.com/Hormold/gpt-sql-box/blob/master/cli.py</a></p>

<p>That&rsquo;s all! Now we can get a response from the GPT-3 API and send it to PostgreSQL for execution.</p>

<blockquote>
<p>Be careful because the GPT-3 API may return invalid SQL query, which can lead to data loss &mdash; carefully check the model responses before executing the query.</p>
</blockquote>

<p>We can easily change the database to a SQL like database such as MySQL or MariaDB by simply changing the way the database schema is built and making small changes to the final_prompt.</p>

<p>For the convenient use of this code, I made a small project on GitHub with minimal functionality and interface for easy use:&nbsp;<a href="https://github.com/Hormold/gpt-sql-box" rel="noopener ugc nofollow" target="_blank">https://github.com/Hormold/gpt-sql-box</a></p>

<center className="m-4"><Image alt="" src="https://miro.medium.com/v2/resize:fit:1400/1*HFTKuapVT-4S0Y2hNgPFYQ.png" width={700} height={700} className="text-center"/></center>

<p id='muted-subtitle' className="text-center text-sm text-gray-300">Here is Midjourney illustration for this small project</p>

<p><strong>If you want to use the GPT-3 API in your projects, then you will need to register at&nbsp;</strong><a href="https://platform.openai.com/" rel="noopener ugc nofollow" target="_blank"><strong>https://platform.openai.com</strong></a><strong>&nbsp;and get an API key.</strong></p>

<p>I hope you enjoyed the article and will be able to use the GPT-3 API in your next projects.</p>

<p>If you have questions, then write to me on Telegram&nbsp;<a href="https://t.me/define" rel="noopener ugc nofollow" target="_blank">@define</a>&nbsp;and I will try to help you.</p>
	</>);
}

const post = {
	title,
	Post,
	slug,
	date
}

export default post; 