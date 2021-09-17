const Explain = () => {
	return (
		<div className="mx-auto col-12 col-md-4" style={{ color: "#FFD369" }}>
			<h2 className="text-center">Explain</h2>
			<div className="mt-3 ms-md-5 ps-md-5 ps-5">
				<h4>Plant id: aaa-bb-c-dd-xxxxxx</h4>
				<ul className="list-unstyled">
					<li>a is type of plant (100: plant, 200: mother tree)</li>
					<li>b is plant id</li>
					<li>c is image code of plant</li>
					<li>
						d is rarity (0-59: common, 60-88: Uncommon, 89-98: rare, 99: mythic)
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Explain;
