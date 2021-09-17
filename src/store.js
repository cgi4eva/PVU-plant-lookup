import { createStore } from "redux";
import reducer from "./reducer/index";
const store = createStore(
	reducer,
	typeof window === "object" &&
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
		? // eslint-disable-next-line no-undef
		  __REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f
);

export default store;