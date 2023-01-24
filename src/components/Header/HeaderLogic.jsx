import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { NavigateTo } from "../../services/NavigateTo";

import myselfImage from "../../content/myself.png";

export const HeaderLogic = () => {
	const { navigateTo } = NavigateTo();
	const location = useLocation();

	const pages = [
		{ id: "home", title: ".home()", paths: ["", "home"], navigateTo: navigateToHome },
		{ id: "work", title: ".work()", paths: ["work"], navigateTo: navigateToWork },
		{ id: "curriculum-vitae", title: ".curriculumVitae()", paths: ["curriculum-vitae", "cv"], navigateTo: navigateToCurriculumVitae },
		{ id: "contact", title: ".contact()", paths: ["contact"], navigateTo: navigateToContact },
	];

	const [isDisplayingPages, setIsDisplayingPages] = useState(false);

	function toggleIsDisplayingPages() {
		setIsDisplayingPages((oldIsDisplayingPages) => !oldIsDisplayingPages);
	}

	function closePages() {
		setIsDisplayingPages(false);
	}

	function navigateToHome(e) {
		navigateTo("/", e.button === 1);
		setIsDisplayingPages(false);
	}

	function navigateToWork(e) {
		navigateTo("/work", e.button === 1);
		setIsDisplayingPages(false);
	}

	function navigateToCurriculumVitae(e) {
		navigateTo("CV Daniel Davies 01-2023.pdf", e.button === 1, true);
		setIsDisplayingPages(false);
	}

	function navigateToContact(e) {
		navigateTo("/contact", e.button === 1);
		setIsDisplayingPages(false);
	}

	const [headerNameClassName, setHeaderNameClassName] = useState("header-name");
	const [mouseOnHeaderName, setMouseOnHeaderName] = useState(false);
	const [isPlayingHeaderNameAnimation, setIsPlayingHeaderNameAnimation] = useState(false);
	const headerNameWavingHandEmojiRef = useRef();

	useEffect(() => {
		function getHeaderNameClassName() {
			let newHeaderNameClassName = "header-name";
			if (isPlayingHeaderNameAnimation) newHeaderNameClassName += " header-name-play-animation";
			setHeaderNameClassName(newHeaderNameClassName);
		}
		getHeaderNameClassName();
	}, [setHeaderNameClassName, location, isPlayingHeaderNameAnimation]);

	useEffect(() => {
		const setMouseOnHeaderNameFalse = () => setIsPlayingHeaderNameAnimation(false);
		const headerNameWavingHandEmojiRefCurrent = headerNameWavingHandEmojiRef?.current;
		headerNameWavingHandEmojiRefCurrent?.addEventListener("animationiteration", setMouseOnHeaderNameFalse);
		return () => headerNameWavingHandEmojiRefCurrent?.removeEventListener("animationiteration", setMouseOnHeaderNameFalse);
	}, [headerNameWavingHandEmojiRef, mouseOnHeaderName]);

	function startHeaderNameAnimation() {
		setMouseOnHeaderName(true);
		setIsPlayingHeaderNameAnimation(true);
	}

	function endHeaderNameAnimation() {
		setMouseOnHeaderName(false);
	}

	return {
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
	};
};
