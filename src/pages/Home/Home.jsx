import { Details } from "./Details/Details";
import { WorkList } from "../../components/WorkList/WorkList";
import { TechnologiesList } from "./TechnologiesList/TechnologiesList";

import "./Home.css";

export const Home = () => {
	return (
		<div className='home-page'>
			<Details />
			<WorkList />
			<TechnologiesList />
		</div>
	);
};
