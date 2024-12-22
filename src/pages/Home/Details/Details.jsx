import "./Details.css";

export const Details = () => {
	return (
		<div className='details'>
			<div className='details-item'>
				<div className='details-title'>
					<div>Hello, I'm Daniel!</div>
					<div className='details-hand-waving-emoji'>👋</div>
				</div>
				<div>I'm deeply interested in maximising the probability of the best possible future.</div>
				<div>Passionate about building AI systems to solve complex real-world problems.</div>
			</div>
			<div className='details-item'>
				<div className='details-subtitle'>
					<div>What I'm Up To</div>
				</div>
				<div className='details-item-status-item'>
					<span>2023 - Now</span>
					<span>🥼</span>
					<span>Independent Mechanistic Interpretability Researcher</span>
				</div>
				<div className='details-item-status-item'>
					<span>2022 - Now</span>
					<span>👨‍💻</span>
					<span>Machine Learning Engineer at Projekt Rising</span>
				</div>
			</div>
			<div className='details-item'>
				<div className='details-subtitle'>
					<div>Skills</div>
				</div>
				<div>Machine Learning, Mechanistic Interpretability, Pre‑Training, Applied AI</div>
				<div>Python, PyTorch, NumPy, JavaScript, React</div>
			</div>
			<div className='details-item details-item-education'>
				<div className='details-subtitle'>
					<div>Education</div>
				</div>
				<div className='details-item-status-item'>
					<span>2023 - 2024</span>
					<img className='details-education-icon' src={require("../../../content/brunel.jpeg")} alt='' />
					<div>MSc in Artificial Intelligence with Distinction at Brunel University London</div>
				</div>
				<div className='details-item-status-item'>
					<span>2019 - 2022</span>
					<img className='details-education-icon' src={require("../../../content/brunel.jpeg")} alt='' />
					<div>BSc in Computer Science (Artificial Intelligence) with First Class Honours</div>
				</div>
			</div>
		</div>
		// <div class='details-texts'>
		// 	<div class='details-text'>
		// 		<span>🥼</span>
		// 		<span>Independent Mechanistic Interpretability Researcher</span>
		// 	</div>
		// 	<div class='details-text'>
		// 		<span>👨‍💻</span>
		// 		<span>Machine Learning Engineer at Projekt Rising</span>
		// 	</div>
		// 	<div class='details-text'>
		// 		<span>🎓</span>
		// 		<span></span>
		// 	</div>
		// 	<div class='details-text'>
		// 		<span>🎯</span>
		// 		<span>Passionate About Building AI to Solve Complex Real-World Problems for Both Business and Humanity</span>
		// 	</div>
		// 	<div class='details-text'>
		// 		<span>🌍</span>
		// 		<span>London, United Kingdom</span>
		// 	</div>
		// </div>
	);
};
