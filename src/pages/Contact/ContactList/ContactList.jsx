import { ContactListItem } from "./ContactListItem/ContactListItem";

import { ContactListLogic } from "./ContactListLogic";

import "./ContactList.css";

export const ContactList = () => {
	const { contact } = ContactListLogic();

	return (
		<div className='contact-list'>
			{contact.list.map((item, index) => (
				<ContactListItem key={index} item={item} />
			))}
		</div>
	);
};
