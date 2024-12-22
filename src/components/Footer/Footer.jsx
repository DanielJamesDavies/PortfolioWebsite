import { FooterLogic } from "./FooterLogic";

import "./Footer.css";

export const Footer = () => {
	const { contact, onFooterBtnNavigateTo, onDownloadCVBtnClick } = FooterLogic();

	return (
		<div className='footer'>
			<div className='footer-title'>Get In Touch</div>
			<div className='footer-section-1'>
				<div className='footer-links-container'>
					<div className='footer-links-title'>Social Media</div>
					<div className='footer-links'>
						{contact.list
							.filter((e) => e.id !== "email")
							.map((item, index) => (
								<button
									key={index}
									className='footer-link'
									onClick={(e) => onFooterBtnNavigateTo(e, item.link)}
									onAuxClick={(e) => onFooterBtnNavigateTo(e, item.link)}
									onMouseDown={(e) => e.preventDefault()}
								>
									{item.image === undefined ? null : (
										<img className='footer-link-image' src={require("../../content/contact/images/" + item.image)} alt='' />
									)}
								</button>
							))}
					</div>
				</div>
				<div className='footer-email-container'>
					<div className='footer-email-title'>Email Address</div>
					<div className='footer-email'>{contact.list.find((e) => e.id === "email")?.value}</div>
				</div>
				<div className='footer-download-cv-btn-container'>
					<button
						className='footer-download-cv-btn'
						onClick={onDownloadCVBtnClick}
						onAuxClick={onDownloadCVBtnClick}
						onMouseDown={(e) => e.preventDefault()}
					>
						<div className='footer-download-cv-btn-content'>
							<div className='footer-download-cv-btn-label'>View Curriculum Vitae</div>
						</div>
					</button>
				</div>
			</div>
			<div className='footer-copyright'>
				<div>Copyright</div>
				<div className='footer-copyright-symbol'>©</div>
				<div>{new Date().getFullYear()} Daniel J Davies</div>
			</div>
		</div>
	);
};
