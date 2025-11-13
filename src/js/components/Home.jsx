import React, { useState } from "react";

//include images into your bundle

import CDMXImage from "../../img/CDMX.jpg";



//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");

	console.log(selectedColor)

	return (
		


			<div className="traffic-light d-flex flex-column align-items-center">
				<div className="stick"></div>

				<div className="square d-flex flex-column justify-content-center align-items-center">
					<div onClick={() => { setSelectedColor("stop") }} className={"light red m-3 " + (selectedColor === "stop" ? " red-shadow" : "")}></div>
					<div onClick={() => { setSelectedColor("crosswithcare") }} className={"light orange m-3 " + (selectedColor === "crosswithcare" ? " orange-shadow" : "")}></div>
					<div onClick={() => { setSelectedColor("youcango") }} className={"light green m-3 " + (selectedColor === "youcango" ? " green-shadow" : "")}></div>



				</div>
			</div>
		
	);
};

export default Home;