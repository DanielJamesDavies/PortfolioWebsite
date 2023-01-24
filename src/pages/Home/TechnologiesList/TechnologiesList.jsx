import "./TechnologiesList.css";

import technologiesList from "../../../content/technologies/technologies.json";

export const TechnologiesList = () => {
	return (
		<div className='home-technologies-list-container'>
			<div className='home-technologies-list-title'>Tools and Technologies</div>
			<div className='home-technologies-list-levels'>
				{technologiesList.list.map((technologiesListLevel, index) => (
					<div key={index} className='home-technologies-list-level'>
						<div className='home-technologies-list-level-competence'>{technologiesListLevel.compentence}</div>
						<div className='home-technologies-list-items'>
							{technologiesListLevel.technologies.map((technology, index) => (
								<div key={index} className='home-technologies-list-item'>
									{technology.image === undefined ? null : (
										<img
											className='home-technologies-list-item-image'
											src={require("../../../content/technologies/images/" + technology.image)}
											alt=''
										/>
									)}
									<div className='home-technologies-list-item-title'>{technology.title}</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
