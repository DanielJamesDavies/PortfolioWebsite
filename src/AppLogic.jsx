import { useEffect, useState } from "react";

export const AppLogic = () => {
	const [appStyles, setAppStyles] = useState({});

	useEffect(() => {
		function getAppStyles() {
			let newAppStyles = {};
			newAppStyles["--full-vh"] = window.innerHeight + "px";
			setAppStyles(newAppStyles);
		}
		getAppStyles();
		window.addEventListener("resize", getAppStyles);
		return () => window.removeEventListener("resize", getAppStyles);
	}, [setAppStyles]);

	return { appStyles };
};
