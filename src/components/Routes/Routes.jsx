import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import { Page } from "../Page/Page";
import { Home } from "../../pages/Home/Home";
import { Work } from "../../pages/Work/Work";
import { CurriculumVitae } from "../../pages/CurriculumVitae/CurriculumVitae";
import { Contact } from "../../pages/Contact/Contact";

export const Routes = () => {
	return (
		<BrowserRouter>
			<RouterRoutes>
				<Route path='' element={<Page element={<Home />} />} />
				<Route path='/' element={<Page element={<Home />} />} />
				<Route path='/work' element={<Page element={<Work />} />} />
				<Route path='/curriculum-vitae' element={<Page element={<CurriculumVitae />} />} />
				<Route path='/cv' element={<Page element={<CurriculumVitae />} />} />
				<Route path='/contact' element={<Page element={<Contact />} />} />
			</RouterRoutes>
		</BrowserRouter>
	);
};
