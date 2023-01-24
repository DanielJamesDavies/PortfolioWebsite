import { Headline } from "./Headline/Headline";
import { Subheadline } from "./Subheadline/Subheadline";
import { WorkList } from "../../components/WorkList/WorkList";
import { TechnologiesList } from "./TechnologiesList/TechnologiesList";

import "./Home.css";

export const Home = () => {
	return (
		<div className='home-page'>
			<Headline />
			<Subheadline />
			<TechnologiesList />
			<WorkList />
		</div>
	);
};
