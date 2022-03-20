import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
	const [playVideo, setPlayVideo] = React.useState(false);
	const vidRef = React.useRef();
	const handleVideoPlay = () => {
		setPlayVideo((previousAction) => !previousAction);
		//means if the previous state is true it will be toggled. We can also use setPlayvideo(true/false)
		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	};
	return (
		<div className="app__video">
			<video ref={vidRef} src={meal} type="video/mp4" controls={false} muted />
			<div className="app__video-overlay flex__center">
				<div className="  flex__center" onClick={handleVideoPlay}>
					{playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
				</div>
			</div>
		</div>
	);
};

export default Intro;
