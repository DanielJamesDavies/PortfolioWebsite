import work from "../../content/work/work.json";

export const WorkListLogic = () => {
	const workList = work.list.map((workListItemId) => require("../../content/work/" + workListItemId + "/summary.json"));

	return { workList };
};
