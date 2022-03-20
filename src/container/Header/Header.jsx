import React from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components/";

import "./Header.css";

const Header = () => {
	return (
		<div className="app__header app__wrapper section__padding" id="home">
			<div className="app__wrapper_info">
				<SubHeading title="Chase the new flavour" />
				<h1 className="app__headre-h1">The key to Fine Dining</h1>
				<p className="p__opensans" style={{ margin: "2rem 0" }}>
					{" "}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus animi, laudantium corrupti ipsam,
					labore placeat dolorum illo accusamus sunt inventore blanditiis facilis laboriosam, est doloribus!
					Pariatur dolore harum esse?
				</p>
				<button className="custom__button" type="button">
					Explore more
				</button>
			</div>
			<div className="app__wrapper_img">
				<img src={images.welcome} alt="header img" />
			</div>
		</div>
	);
};

export default Header;
