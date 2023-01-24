import { useContext, useRef, useState, useEffect } from "react";

import { LightboxContext } from "../../context/LightboxContext";

export const LightboxLogic = () => {
	const { lightboxImages, setLightboxImages, lightboxIndex, setLightboxIndex } = useContext(LightboxContext);
	const lightboxContainerRef = useRef();
	const lightBoxImageContainerRef = useRef();
	const [isImagePixelated, setIsImagePixelated] = useState(false);

	function closeLightbox(e) {
		e.stopPropagation();
		setLightboxImages([]);
		setLightboxIndex(0);
		setIsImagePixelated(false);
	}

	function backImage(e) {
		e.stopPropagation();
		setLightboxIndex((oldLightboxIndex) => (oldLightboxIndex <= 0 ? 0 : oldLightboxIndex - 1));
	}

	function forwardImage(e) {
		e.stopPropagation();
		setLightboxIndex((oldLightboxIndex) => (oldLightboxIndex >= lightboxImages.length - 1 ? lightboxImages.length - 1 : oldLightboxIndex + 1));
	}

	useEffect(() => {
		function onWindowKeyDown(e) {
			if (!lightboxImages || lightboxImages.length === 0) return;
			e.preventDefault();
			switch (e.code) {
				case "ArrowUp":
					setLightboxIndex((oldLightboxIndex) => (oldLightboxIndex - 1 < 0 ? 0 : oldLightboxIndex - 1));
					setIsImagePixelated(false);
					break;
				case "ArrowLeft":
					setLightboxIndex((oldLightboxIndex) => (oldLightboxIndex - 1 < 0 ? 0 : oldLightboxIndex - 1));
					setIsImagePixelated(false);
					break;
				case "ArrowRight":
					setLightboxIndex((oldLightboxIndex) =>
						oldLightboxIndex + 1 > lightboxImages.length - 1 ? lightboxImages.length - 1 : oldLightboxIndex + 1
					);
					setIsImagePixelated(false);
					break;
				case "ArrowDown":
					setLightboxIndex((oldLightboxIndex) =>
						oldLightboxIndex + 1 > lightboxImages.length - 1 ? lightboxImages.length - 1 : oldLightboxIndex + 1
					);
					setIsImagePixelated(false);
					break;
				case "Escape":
					setLightboxImages([]);
					setLightboxIndex(0);
					setIsImagePixelated(false);
					break;
				default:
					break;
			}
		}

		window.addEventListener("keydown", onWindowKeyDown);
		return () => window.removeEventListener("keydown", onWindowKeyDown);
	}, [lightboxImages, setLightboxIndex, setIsImagePixelated, setLightboxImages]);

	var zoom = useRef(1);
	var panning = useRef(false);
	var pointX = useRef(0);
	var pointY = useRef(0);
	var startPos = useRef({ x: 0, y: 0 });

	useEffect(() => {
		zoom.current = 1;
		panning.current = false;
		pointX.current = 0;
		pointY.current = 0;

		const lightBoxImageContainerRefCurrent = lightBoxImageContainerRef.current;
		if (lightBoxImageContainerRef?.current) {
			lightBoxImageContainerRefCurrent.style.transform =
				"translate(" + pointX.current + "px, " + pointY.current + "px) scale(" + zoom.current + ")";
			lightBoxImageContainerRefCurrent.addEventListener("mousedown", imageLightBoxOnMouseDown);
			lightBoxImageContainerRefCurrent.addEventListener("mouseup", imageLightBoxOnMouseUp);
			lightBoxImageContainerRefCurrent.addEventListener("mouseout", imageLightBoxOnMouseUp);
			lightBoxImageContainerRefCurrent.addEventListener("mousemove", imageLightBoxOnMouseMove);
			lightBoxImageContainerRefCurrent.addEventListener("wheel", imageLightBoxOnWheel);
		}
		return () => {
			if (lightBoxImageContainerRefCurrent) {
				lightBoxImageContainerRefCurrent.removeEventListener("mousedown", imageLightBoxOnMouseDown);
				lightBoxImageContainerRefCurrent.removeEventListener("mouseup", imageLightBoxOnMouseUp);
				lightBoxImageContainerRefCurrent.removeEventListener("mouseout", imageLightBoxOnMouseUp);
				lightBoxImageContainerRefCurrent.removeEventListener("mousemove", imageLightBoxOnMouseMove);
				lightBoxImageContainerRefCurrent.removeEventListener("wheel", imageLightBoxOnWheel);
			}
		};
	}, [lightBoxImageContainerRef, lightboxImages, lightboxIndex, zoom, panning, pointX, pointY]);

	function imageLightBoxOnMouseDown(e) {
		e.preventDefault();
		startPos = { x: e.clientX - pointX.current, y: e.clientY - pointY.current };
		panning.current = true;
	}

	function imageLightBoxOnMouseUp() {
		panning.current = false;
	}

	function imageLightBoxOnMouseMove(e) {
		e.preventDefault();
		if (!panning.current) return;
		pointX.current = e.clientX - startPos.x;
		pointY.current = e.clientY - startPos.y;
		lightBoxImageContainerRef.current.style.transform =
			"translate(" + pointX.current + "px, " + pointY.current + "px) scale(" + zoom.current + ")";
	}

	function imageLightBoxOnWheel(e) {
		e.stopPropagation();
		e.preventDefault();

		let xs = (e.clientX - pointX.current) / zoom.current;
		let ys = (e.clientY - pointY.current) / zoom.current;
		let delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;

		if (Math.sign(delta) === 1) {
			zoom.current *= 1.2;
		} else {
			zoom.current /= 1.2;
		}

		setIsImagePixelated(zoom.current > 3);

		if (zoom.current <= 1) {
			zoom.current = 1;
			pointX.current = 0;
			pointY.current = 0;
		} else if (zoom.current >= 40) {
			zoom.current = 40;
			pointX.current = e.clientX - xs * zoom.current;
			pointY.current = e.clientY - ys * zoom.current;
		} else {
			pointX.current = e.clientX - xs * zoom.current;
			pointY.current = e.clientY - ys * zoom.current;
			lightBoxImageContainerRef.current.style.transform =
				"translate(" + pointX.current + "px, " + pointY.current + "px) scale(" + zoom.current + ")";
		}

		lightBoxImageContainerRef.current.style.transform =
			"translate(" + pointX.current + "px, " + pointY.current + "px) scale(" + zoom.current + ")";
	}

	useEffect(() => {
		function onGesture(e) {
			e.preventDefault();
			e.stopPropagation();
			document.body.style.zoom = 0.99;
		}

		const lightboxContainerRefCurrent = lightboxContainerRef?.current;
		if (lightboxContainerRefCurrent) {
			lightboxContainerRefCurrent.addEventListener("gesturestart", onGesture);
			lightboxContainerRefCurrent.addEventListener("gesturechange", onGesture);
			lightboxContainerRefCurrent.addEventListener("gestureend", onGesture);
		}

		return () => {
			if (lightboxContainerRefCurrent) {
				lightboxContainerRefCurrent.removeEventListener("gesturestart", onGesture);
				lightboxContainerRefCurrent.removeEventListener("gesturechange", onGesture);
				lightboxContainerRefCurrent.removeEventListener("gestureend", onGesture);
			}
		};
	}, [lightboxContainerRef, lightBoxImageContainerRef]);

	let prevDist = useRef(false);
	// eslint-disable-next-line
	const [points, setPoints] = useState(false);
	let startCoords = useRef({ centerX: false, centerY: false });

	function onTouchStart(e) {
		e.stopPropagation();

		if (e.touches.length === 1) {
			startPos = { x: e.touches[0].pageX - pointX.current, y: e.touches[0].pageY - pointY.current };
		} else if (e.touches.length === 2) {
			prevDist.current = false;
			startPos = { x: e.touches[0].pageX - pointX.current, y: e.touches[0].pageY - pointY.current };
			startCoords.current.centerX = Math.min(e.touches[0].pageX, e.touches[1].pageX) + Math.abs(e.touches[0].pageX - e.touches[1].pageX) / 2;
			startCoords.current.centerY = Math.min(e.touches[0].pageY, e.touches[1].pageY) + Math.abs(e.touches[0].pageY - e.touches[1].pageY) / 2;
		} else {
			startPos = { x: e.touches[0].pageX - pointX.current, y: e.touches[0].pageY - pointY.current };
		}
	}

	function onTouchMove(e) {
		if (e.touches.length === 1) {
			const newPointX = e.touches[0].pageX - startPos.x;
			const newPointY = e.touches[0].pageY - startPos.y;
			if (Number.isNaN(newPointX) || Number.isNaN(newPointY)) return;
			pointX.current = newPointX;
			pointY.current = newPointY;
		} else if (e.touches.length === 2) {
			let dist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);

			if (prevDist.current === false) prevDist.current = dist;

			let diffDist = prevDist.current - dist;

			let xs = (startCoords.current.centerX - pointX.current) / zoom.current;
			let ys = (startCoords.current.centerY - pointY.current) / zoom.current;

			zoom.current -= diffDist * zoom.current * 0.006;
			setIsImagePixelated(zoom.current > 3);

			if (zoom.current <= 1) {
				zoom.current = 1;
				pointX.current = 0;
				pointY.current = 0;
			} else if (zoom.current >= 50) {
				zoom.current = 50;
				pointX.current = startCoords.current.centerX - xs * zoom.current;
				pointY.current = startCoords.current.centerY - ys * zoom.current;
			} else {
				pointX.current = startCoords.current.centerX - xs * zoom.current;
				pointY.current = startCoords.current.centerY - ys * zoom.current;
			}

			setPoints({ pointX: pointX.current, pointY: pointY.current });

			prevDist.current = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
		}

		lightBoxImageContainerRef.current.style.transform =
			"translate(" + pointX.current + "px, " + pointY.current + "px) scale(" + zoom.current + ")";
	}

	return {
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
	};
};
