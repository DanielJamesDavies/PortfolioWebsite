import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import "./Page.css";

export const Page = ({ element }) => {
	return (
		<div className='page'>
			<Header />
			<div className='page-content'>{element}</div>
			<Footer />
		</div>
	);
};
