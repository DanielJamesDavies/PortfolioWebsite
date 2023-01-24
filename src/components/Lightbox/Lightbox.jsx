import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

import { LightboxLogic } from "./LightboxLogic";

import "./Lightbox.css";

export const Lightbox = () => {
	const {
		lightboxImages,
		lightboxIndex,
		lightboxContainerRef,
		lightBoxImageContainerRef,
		isImagePixelated,
		closeLightbox,
		backImage,
		forwardImage,
		onTouchStart,
		onTouchMove,
	} = LightboxLogic();

	return (
		<div
			ref={lightboxContainerRef}
			className={lightboxImages.length === 0 ? "lightbox lightbox-hidden" : "lightbox"}
			onClick={closeLightbox}
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
		>
			<div ref={lightBoxImageContainerRef} className='lightbox-image-container'>
				<div className={isImagePixelated ? "lightbox-image lightbox-image-is-pixelated" : "lightbox-image"}>
					<img src={lightboxImages[lightboxIndex]} alt='' onClick={(e) => e.stopPropagation()} />
				</div>
			</div>
			<button
				className={
					lightboxIndex <= 0
						? "lightbox-arrow-btn lightbox-arrow-btn-left lightbox-arrow-btn-inactive"
						: "lightbox-arrow-btn lightbox-arrow-btn-left"
				}
				onClick={backImage}
			>
				<FaArrowLeft />
			</button>
			<button
				className={
					lightboxIndex >= lightboxImages.length - 1
						? "lightbox-arrow-btn lightbox-arrow-btn-right lightbox-arrow-btn-inactive"
						: "lightbox-arrow-btn lightbox-arrow-btn-right"
				}
				onClick={forwardImage}
			>
				<FaArrowRight />
			</button>
			<button className='lightbox-close-btn' onClick={closeLightbox}>
				<FaTimes />
			</button>
			<div className='lightbox-background' />
		</div>
	);
};
