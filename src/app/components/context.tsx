import { createContext } from "react";

const AppContext = createContext({
	funMode: false,
	setFunMode: (newMode: boolean) => {return},
	darkMode: true,
	setDarkMode: (darkMode: boolean) => {return},
});

export default AppContext;