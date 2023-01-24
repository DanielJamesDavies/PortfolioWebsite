import { useState, useRef, useEffect, useContext } from "react";
import { LightboxContext } from "../../../context/LightboxContext";
import { NavigateTo } from "../../../services/NavigateTo";

export const WorkListItemLogic = ({ item }) => {
	const { setLightboxImages, setLightboxIndex } = useContext(LightboxContext);

	const [currImageIndex, setCurrImageIndex] = useState(0);

	function openImageInLightbox(index) {
		setLightboxImages(item.images.map((image) => require("../../../content/work/" + item.id + "/images/" + image)));
		setLightboxIndex(index);
	}

	function decrementCurrImageIndex() {
		setCurrImageIndex((oldCurrImageIndex) => {
			if (oldCurrImageIndex <= 0) return 0;
			return oldCurrImageIndex - 1;
		});
	}

	function incrementCurrImageIndex() {
		setCurrImageIndex((oldCurrImageIndex) => {
			if (oldCurrImageIndex >= item.images.length - 1) return item.images.length - 1;
			return oldCurrImageIndex + 1;
		});
	}

	const imagesContainerRef = useRef();
	const imagesTouchStartCoords = useRef({ x: 0, y: 0 });
	useEffect(() => {
		const onImageTouchStart = (e) => {
			imagesTouchStartCoords.current = { x: e.touches[0].pageX, y: e.touches[0].pageY };
		};
		const onImageTouchMove = (e) => {
			const imagesTouchMoveCoords = { x: e.touches[0].pageX, y: e.touches[0].pageY };
			if (Math.abs(imagesTouchStartCoords.current.y - imagesTouchMoveCoords.y) > 24) return (imagesTouchStartCoords.current = { x: 0, y: 0 });
			const deltaX = imagesTouchStartCoords.current.x - imagesTouchMoveCoords.x;
			if (Math.abs(deltaX) < window.innerWidth * 0.1) return;
			if (Math.sign(deltaX) === -1) {
				setCurrImageIndex((oldCurrImageIndex) => {
					if (oldCurrImageIndex <= 0) return 0;
					return oldCurrImageIndex - 1;
				});
			} else {
				setCurrImageIndex((oldCurrImageIndex) => {
					if (oldCurrImageIndex >= item.images.length - 1) return item.images.length - 1;
					return oldCurrImageIndex + 1;
				});
			}
			imagesTouchStartCoords.current = { x: 0, y: 0 };
		};

		const imagesContainerRefCurrent = imagesContainerRef?.current;
		imagesContainerRefCurrent?.addEventListener("touchstart", onImageTouchStart);
		imagesContainerRefCurrent?.addEventListener("touchmove", onImageTouchMove);
		return () => {
			imagesContainerRefCurrent?.removeEventListener("touchstart", onImageTouchStart);
			imagesContainerRefCurrent?.removeEventListener("touchmove", onImageTouchMove);
		};
	}, [imagesContainerRef, setCurrImageIndex, item]);

	const { navigateTo } = NavigateTo();

	function navigateToSite(e) {
		navigateTo(item.siteUrl, e.button === 1, true);
	}

	function navigateToCode(e) {
		navigateTo(item.codeUrl, e.button === 1, true);
	}

	return {
		currImageIndex,
		openImageInLightbox,
		decrementCurrImageIndex,
		incrementCurrImageIndex,
		imagesContainerRef,
		navigateToSite,
		navigateToCode,
	};
};
