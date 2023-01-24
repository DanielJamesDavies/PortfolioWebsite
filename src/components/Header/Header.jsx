import { HeaderLogic } from "./HeaderLogic";

import "./Header.css";

export const Header = () => {
	const {
		location,
		pages,
		navigateToHome,
		myselfImage,
		isDisplayingPages,
		toggleIsDisplayingPages,
		closePages,
		headerNameClassName,
		headerNameWavingHandEmojiRef,
		startHeaderNameAnimation,
		endHeaderNameAnimation,
	} = HeaderLogic();

	return (
		<div className={isDisplayingPages ? "header header-is-displaying-pages" : "header"}>
			<button
				className={headerNameClassName}
				onClick={navigateToHome}
				onAuxClick={navigateToHome}
				onMouseDown={(e) => e.preventDefault()}
				onMouseEnter={startHeaderNameAnimation}
				onMouseMove={startHeaderNameAnimation}
				onMouseLeave={endHeaderNameAnimation}
			>
				<img className='header-name-image' src={myselfImage} alt='' />
				<div ref={headerNameWavingHandEmojiRef} className='header-name-image-waving-hand-emoji'>
					👋
				</div>
				<div className='header-name-image-waving-hand-emoji-initial'>👋</div>
				<div className='header-name-text'>Daniel J Davies</div>
			</button>
			<button className='header-hamburger' onClick={toggleIsDisplayingPages}>
				<div className='header-hamburger-line'></div>
				<div className='header-hamburger-line'></div>
				<div className='header-hamburger-line'></div>
			</button>
			<div className='header-pages'>
				{pages.map((page, index) => (
					<button
						key={index}
						className={
							page.paths.includes(location.pathname.substring(1)) ? "header-pages-btn header-pages-btn-active" : "header-pages-btn"
						}
						onClick={page.navigateTo}
						onAuxClick={page.navigateTo}
						onMouseDown={(e) => e.preventDefault()}
					>
						{page.title}
					</button>
				))}
			</div>
			<div className='header-pages-background' onClick={closePages} onTouchMove={closePages} />
		</div>
	);
};
