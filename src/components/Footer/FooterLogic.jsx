import { NavigateTo } from "../../services/NavigateTo";

import contact from "../../content/contact/contact.json";

export const FooterLogic = () => {
	const { navigateTo } = NavigateTo();

	function onFooterBtnNavigateTo(e, url) {
		navigateTo(url, e.button === 1, true);
	}

	function onDownloadCVBtnClick(e) {
		navigateTo("CV Daniel Davies 01-2023.pdf", e.button === 1, true);
	}

	return { contact, onFooterBtnNavigateTo, onDownloadCVBtnClick };
};
