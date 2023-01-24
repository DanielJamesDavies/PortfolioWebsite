import { useLocation, useNavigate } from "react-router-dom";

export const NavigateTo = () => {
	const location = useLocation();
	const navigate = useNavigate();

	function navigateTo(url, openInNewWindow, isExternal) {
		if (openInNewWindow) return window.open(url, "_blank");

		if (location.pathname === "/") navigate("/");

		if (isExternal) {
			window.location.href = url;
			window.location.replace(url);
			return;
		}

		window.scrollTo(0, 0);
		navigate(url);
	}

	return { navigateTo };
};
