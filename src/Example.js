const Example = () => {
	return (
		<div className="mx-auto col-12 col-md-4" style={{ color: "#FFD369" }}>
			<h3 className="text-center">How to get plant ID</h3>
			<p className="text-center">Click on seed and copy number in URL</p>
			<div>
				<img
					className="w-100"
					src={`${process.env.PUBLIC_URL}/assets/example/seed-ex.png`}
					alt="ex"
				/>
			</div>
		</div>
	);
};

export default Example;
