import { WorkListItem } from "./WorkListItem/WorkListItem";

import { WorkListLogic } from "./WorkListLogic";

import "./WorkList.css";

export const WorkList = () => {
	const { workList } = WorkListLogic();

	return (
		<div className='work-list-container'>
			<div className='work-list-title'>My Work</div>
			<div className='work-list-items'>
				{workList.map((workListItem, index) => (
					<WorkListItem key={index} item={workListItem} />
				))}
			</div>
		</div>
	);
};
