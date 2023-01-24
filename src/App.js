import { Routes } from "./components/Routes/Routes";
import { Lightbox } from "./components/Lightbox/Lightbox";

import { AppLogic } from "./AppLogic";

import "./App.css";

function App() {
	const { appStyles } = AppLogic();

	return (
		<div className='App' style={appStyles}>
			<Routes />
			<Lightbox />
		</div>
	);
}

export default App;
