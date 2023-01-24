import { ContactList } from "./ContactList/ContactList";

import "./Contact.css";

export const Contact = () => {
	return (
		<div className='contact-page'>
			<div className='contact-title'>Contact</div>
			<ContactList />
		</div>
	);
};
