import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import "./Page.css";

export const Page = ({ element }) => {
	return (
		<div className='page'>
			<Header />
			<div className='page-content'>{element}</div>
			<Footer />
			<div className='page-background'>
				<div className='page-background-emojis'>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🌌</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>☄️</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>📘</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🦾</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🛰️</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🥼</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>🔭</div>
					</div>
					<div className='page-background-emoji-container'>
						<div className='page-background-emoji'>💻</div>
					</div>
				</div>
				<div className='page-background-emoji-stars'>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
					<div className='page-background-emoji-star-container'>
						<div className='page-background-emoji'>🌟</div>
					</div>
				</div>
			</div>
		</div>
	);
};
