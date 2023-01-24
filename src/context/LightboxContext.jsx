import { createContext, useState } from "react";

export const LightboxContext = createContext();

const LightboxProvider = ({ children }) => {
	const [lightboxImages, setLightboxImages] = useState([]);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	return (
		<LightboxContext.Provider value={{ lightboxImages, setLightboxImages, lightboxIndex, setLightboxIndex }}>
			{children}
		</LightboxContext.Provider>
	);
};

export default LightboxProvider;
