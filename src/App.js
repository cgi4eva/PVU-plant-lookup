import Input from "./Input";
import { Provider } from "react-redux";
import store from "./store";
import Output from "./Output";
import Explain from "./Explain";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Example from "./Example";

const App = () => {
	let [counter, setCounter] = useState(0);
	useEffect(() => {
		const getCounterAPI = async () => {
			let res = await fetch(
				"https://api.countapi.xyz/update/baolongt.github.io/PVU-plant-lookup?amount=1"
			);
			let data = await res.json();
			setCounter(data.value);
		};
		getCounterAPI();
	}, []);

	return (
		<>
			<p style={{ color: "#EEEEEE" }} className="h1 text-center">
				Plant Lookup
			</p>
			<div className="shadow p-3 mb-5 bg-body rounded col-12 col-md-4 mx-auto">
				<Provider store={store}>
					<Input></Input>
					<Output></Output>
				</Provider>
			</div>
			<Explain></Explain>
			<Example></Example>

			<div className="mt-3" style={{ color: "#FFD369" }}>
				<p className="text-center">Thanks @Cherry3136 for formular</p>
				<p className="text-center">Visit count: {counter}</p>
			</div>
		</>
	);
};

export default App;
