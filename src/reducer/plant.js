export default function plant(state = "2009039914", action) {
	switch (action.type) {
		case "CHANGE_PLANT":
			return action.payload;
		default:
			return state;
	}
}
