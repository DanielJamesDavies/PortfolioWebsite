import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { WorkListItemLogic } from "./WorkListItemLogic";

import "./WorkListItem.css";

export const WorkListItem = ({ item }) => {
	const {
		currImageIndex,
		openImageInLightbox,
		decrementCurrImageIndex,
		incrementCurrImageIndex,
		imagesContainerRef,
		navigateToSite,
		navigateToDemo,
		navigateToCode,
	} = WorkListItemLogic({ item });

	return (
		<div className='work-list-item'>
			{item.images.length === 0 ? (
				<div className='work-list-item-images-container'>
					<div className='work-list-item-image-container work-list-item-image-container-placeholder'></div>
				</div>
			) : (
				<div ref={imagesContainerRef} className='work-list-item-images-container'>
					<div className='work-list-item-images' style={{ "--currImageIndex": currImageIndex }}>
						{item.images.map((image, index) => (
							<div key={index} className='work-list-item-image-container' onClick={() => openImageInLightbox(index)}>
								<img
									className='work-list-item-image'
									src={require("../../../content/work/" + item.id + "/images/" + image)}
									alt=''
								/>
							</div>
						))}
					</div>
					<button
						className={
							currImageIndex === 0
								? "work-list-item-images-overlay-swipe-btn work-list-item-images-overlay-swipe-btn-decrement work-list-item-images-overlay-swipe-btn-inactive"
								: "work-list-item-images-overlay-swipe-btn work-list-item-images-overlay-swipe-btn-decrement"
						}
						onClick={decrementCurrImageIndex}
					>
						<FaArrowLeft />
					</button>
					<button
						className={
							currImageIndex === item.images.length - 1
								? "work-list-item-images-overlay-swipe-btn work-list-item-images-overlay-swipe-btn-increment work-list-item-images-overlay-swipe-btn-inactive"
								: "work-list-item-images-overlay-swipe-btn work-list-item-images-overlay-swipe-btn-increment"
						}
						onClick={incrementCurrImageIndex}
					>
						<FaArrowRight />
					</button>
					<div className='work-list-item-images-overlay-index-text'>
						{currImageIndex + 1}/{item.images.length}
					</div>
				</div>
			)}
			<div className='work-list-item-details-container'>
				<div className='work-list-item-details'>
					<div className='work-list-item-title'>{item.title}</div>
					<div className='work-list-item-second-title'>{item.second_title}</div>
					{
						<div
							className={
								"work-list-item-links" +
								(item.siteUrl === undefined && item.demoUrl === undefined && item.codeUrl === undefined
									? " work-list-item-links-empty"
									: "")
							}
						>
							{item.siteUrl === undefined ? null : (
								<button
									className='work-list-item-links-item'
									onClick={navigateToSite}
									onAuxClick={navigateToSite}
									onMouseDown={(e) => e.preventDefault()}
								>
									<div>Try Now</div>
								</button>
							)}
							{item.demoUrl === undefined ? null : (
								<button
									className='work-list-item-links-item'
									onClick={navigateToDemo}
									onAuxClick={navigateToDemo}
									onMouseDown={(e) => e.preventDefault()}
								>
									<div>Watch Demo</div>
								</button>
							)}
							{item.codeUrl === undefined ? null : (
								<button
									className='work-list-item-links-item'
									onClick={navigateToCode}
									onAuxClick={navigateToCode}
									onMouseDown={(e) => e.preventDefault()}
								>
									<div>Source Code</div>
								</button>
							)}
						</div>
					}
					<div className='work-list-item-description'>{item.description}</div>
					<div className='work-list-item-tags-title'>Tools and Technologies</div>
					<div className='work-list-item-tags'>
						{item?.tags?.map((tag, index) => (
							<div key={index} className='work-list-item-tags-item'>
								<div>{tag}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
