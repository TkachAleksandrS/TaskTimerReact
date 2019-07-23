import { SET_TASK, REMOVE_TASK, RESET_TASKS, REFRESH_TASKS } from '../types';
import { getLS, setLS } from 'utils/utils';

const initState = getLS('tasks', false) || [];

const tasks = (state = initState, action) => {
	switch (action.type) {
		case SET_TASK:
			const tasks = [...state, action.payload];
			setLS('tasks', tasks, false);
			return tasks;

		case REMOVE_TASK:
			let newTasks = [...state];
			newTasks.splice(action.payload, 1);
			setLS('tasks', newTasks, false);
			return newTasks;

		case REFRESH_TASKS:
			return action.payload;

		case RESET_TASKS:
			return [];

		default:
			return state;
	}
};

export default tasks;