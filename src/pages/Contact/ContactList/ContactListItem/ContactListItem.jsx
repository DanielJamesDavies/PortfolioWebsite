import { ContactListItemLogic } from "./ContactListItemLogic";

import "./ContactListItem.css";

export const ContactListItem = ({ item }) => {
	const { onContactListItemNavigateTo } = ContactListItemLogic({ item });

	return (
		<div className={item?.link ? "contact-list-item contact-list-item-clickable" : "contact-list-item"} onClick={onContactListItemNavigateTo}>
			<div className='contact-list-item-title'>{item.title}</div>
			<div className='contact-list-item-value-container'>
				{!item?.image ? null : (
					<img className='contact-list-item-image' src={require("../../../../content/contact/images/" + item.image)} alt='' />
				)}
				<div className='contact-list-item-value'>{item.value}</div>
			</div>
		</div>
	);
};
