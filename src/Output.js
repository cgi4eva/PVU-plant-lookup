import { useSelector } from "react-redux";
import { ElementMap } from "./PlantElementMap";
const convertID = (plant) => {
	let arrayID = plant.split("");
	// aaa-bb-c-dd-xx
	let type = `${arrayID[0]}${arrayID[1]}${arrayID[2]}`;
	let id = parseInt(`${arrayID[3]}${arrayID[4]}`);
	let img = `${arrayID[5]}`;
	let rarity = `${arrayID[6]}${arrayID[7]}`;
	return { type, id, img, rarity };
};

const calculateRarity = (num) => {
	let rarityType = "",
		color = "";
	let rarity = parseInt(num);
	if (rarity >= 0 && rarity <= 59) {
		rarityType = "Common";
		color = "#198754";
	} else if (rarity >= 60 && rarity <= 88) {
		rarityType = "Uncommon";
		color = "#0d6efd";
	} else if (rarity >= 89 && rarity <= 98) {
		rarityType = "Rare";
		color = "#dc3545";
	} else if (rarity === 99) {
		rarityType = "Mythic";
		color = "#6610f2";
	}
	return { rarityType, color };
};

const Output = () => {
	const plant = useSelector((state) => state.plant);
	let { type, id, img, rarity } = convertID(plant);
	let { rarityType, color } = calculateRarity(rarity);
	let ElementsMap = ElementMap();
	return plant === "" ? (
		<>
			<p className="text-center h3 mt-4">Wrong input</p>
		</>
	) : (
		<div className="d-flex m-auto mt-4 justify-content-center fs-3">
			<Img id={id} imgType={img} />
			<div className="ms-3">
				<p>Type: {type === "100" ? "Plant" : "Mother tree"}</p>
				<p>
					Rarity: <span style={{ color: `${color}` }}>{rarityType}</span>
				</p>
				<p>Element: {ElementsMap[`${id}`]}</p>
			</div>
		</div>
	);
};
const Img = (props) => {
	return (
		<img
			className="w-25 h-25"
			src={
				process.env.PUBLIC_URL + `/assets/img/${props.id}_${props.imgType}.png`
			}
			alt={props.id}
		/>
	);
};
export default Output;
