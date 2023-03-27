import { createContext, useState } from "react";
const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);
	const stateToShare = {};

	return (
		<NavigationContext.Provider value={stateToShare}>
			{currentPath}
			{children}
		</NavigationContext.Provider>
	);
};

export { NavigationProvider };
export default NavigationContext;
