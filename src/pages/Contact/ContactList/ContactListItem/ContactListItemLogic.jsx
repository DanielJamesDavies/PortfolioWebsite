import { NavigateTo } from "../../../../services/NavigateTo";

export const ContactListItemLogic = ({ item }) => {
	const { navigateTo } = NavigateTo();

	function onContactListItemNavigateTo(e) {
		if (item?.link) navigateTo(item.link, e.button === 1, true);
	}

	return { onContactListItemNavigateTo };
};
