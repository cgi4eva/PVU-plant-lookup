const Explain = () => {
	return (
		<div className="mx-auto col-12 col-md-4" style={{ color: "#FFD369" }}>
			<h2 className="text-center">Explain</h2>
			<div className="mt-3 ms-md-5 ps-md-5 ps-4">
				<h4>
					Plant id:
					<span style={{ color: "#ef476f" }}> aaa</span>-
					<span style={{ color: "#ffd166" }}>bb</span>-
					<span style={{ color: "#06d6a0" }}>c</span>-
					<span style={{ color: "#118ab2" }}>dd</span>-
					<span style={{ color: "#F0F0F0" }}>xxxxxx</span>
				</h4>
				<ul className="list-unstyled">
					<li style={{ color: "#ef476f" }}>
						a is type of plant (100: plant, 200: mother tree)
					</li>
					<li style={{ color: "#ffd166" }}>b is plant id</li>
					<li style={{ color: "#06d6a0" }}>c is image code of plant</li>
					<li style={{ color: "#118ab2" }}>
						d is rarity (0-59: common, 60-88: uncommon, 89-98: rare, 99: mythic)
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Explain;
