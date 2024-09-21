import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { NavigateTo } from "../../services/NavigateTo";

import contact from "../../content/contact/contact.json";

import myselfImage from "../../content/myself.png";

export const HeaderLogic = () => {
	const { navigateTo } = NavigateTo();
	const location = useLocation();

	const pages = [
		{ id: "home", title: "Home", paths: ["", "home"], navigateTo: navigateToHome },
		{ id: "work", title: "Work", paths: ["work"], navigateTo: navigateToWork },
		{ id: "curriculum-vitae", title: "Curriculum Vitae", paths: ["curriculum-vitae", "cv"], navigateTo: navigateToCurriculumVitae },
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
		const is_mobile = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i].some((device) =>
			navigator.userAgent.match(device)
		);
		if (is_mobile) {
			navigateTo("CV Daniel Davies.pdf", e.button === 1, true);
			return false;
		}

		navigateTo("/cv", e.button === 1);
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

	function onSocialBtnNavigateTo(e, url) {
		navigateTo(url, e.button === 1, true);
		if (url.substring(0, 6) === "mailto") navigator.clipboard.writeText("danieljamesdavies12@gmail.com");
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
		contact,
		onSocialBtnNavigateTo,
	};
};
