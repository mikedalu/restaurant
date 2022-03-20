import React from "react";
import images from "../../constants/images";

import "./AboutUs.css";

const AboutUs = () => {
	return (
		<div className="app__aboutus app__bg flex__center section__padding" id="about">
			<div className="app__aboutus-overlay flex__center">
				<img src={images.G} alt="g letter" />
			</div>
			<div className="app__aboutus-content flex__center">
				<div className="app__aboutus-content_about">
					<h1 className="headtext__cormorant">About Us</h1>
					<img src={images.spoon} alt="spoon_spoon" className="spoon__img" />
					<p className="p__opensans">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officiis natus, id quis ipsam maiores quibusdam
						quidem fugiat iusto amet, veritatis tempora sint eius error quos ex hic molestiae ullam. Amet inventore optio quidem
						provident earum rem delectus doloremque expedita suscipit illo, odit adipisci in neque iusto a temporibus blanditiis
						unde obcaecati. Non in a explicabo quisquam numquam quod quasi.
					</p>
					<button type="button" className="custom__button">
						Know more
					</button>
				</div>
				<div className="app__aboutus-content_knife flex__center">
					<img src={images.knife} alt="knife" />
				</div>
				<div className="app__aboutus-content_history">
					<h1 className="headtext__cormorant">Our History</h1>
					<img src={images.spoon} alt="spoon_spoon" className="spoon__img" />
					<p className="p__opensans">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur officiis natus, id quis ipsam maiores quibusdam
						quidem fugiat iusto amet, veritatis tempora sint eius error quos ex hic molestiae ullam. Amet inventore optio quidem
						provident earum rem delectus doloremque expedita suscipit illo, odit adipisci in neque iusto a temporibus blanditiis
						unde obcaecati. Non in a explicabo quisquam numquam quod quasi.
					</p>
					<button type="button" className="custom__button">
						Know more
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
