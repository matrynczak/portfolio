import { useEffect, useState, useContext, createContext } from 'react';

const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
	// This is the exact same logic that we previously had in our hook

	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return (
		<viewportContext.Provider value={{ width, height }}>
			{children}
		</viewportContext.Provider>
	);
};

export const useViewport = () => {
	/* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
	const { width, height } = useContext(viewportContext);
	return { width, height };
};
