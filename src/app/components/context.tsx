import { createContext } from "react";

const AppContext = createContext({
	funMode: false,
	setFunMode: (newMode: boolean) => {
		console.log("setFunMode not implemented");
	},
	darkMode: true,
	setDarkMode: (darkMode: boolean) => {
		console.log("setDarkMode not implemented");
	}
});

export default AppContext;