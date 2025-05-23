import { useRef, useState } from "react";
const VideoPage = () => {
	const [play, setPlay] = useState(true)
	const [mute, setMute] = useState(true)
	const videoRef = useRef(null);
  	const handlePlay = () => {
		setPlay(false)
		videoRef.current?.play();
  	};

	const handleMute = () => {
		setMute(true);
		if (videoRef.current) {
    		videoRef.current.muted = true;
  		}
	}

	const handleUnmute = () => {
		setMute(false);
		  if (videoRef.current) {
			videoRef.current.muted = false;
		  }
	}

	const handlePause = () => {
		setPlay(true);
		videoRef.current?.pause();
	}
	return (
		<div className="relative h-screen w-full md:aspect-video bg-[#2D2D2D] py-1 flex items-center justify-center">
			{/* <h1 className="text-5xl md:text-8xl font-extrabold text-white uppercase">
				Get to
				<br />
				know us
			</h1>
			<div className="absolute mt-[1%] text-[100px] md:text-[200px] opacity-100 z-10 mix-blend-difference">
				<i className="ri-play-large-fill text-white"></i>
			</div> */}
			<div className="absolute px-6 md:px-30 pb-8 text-2xl bottom-0 left-0 flex gap-6 items-center p-4 z-20 text-green-400">
				{(play)?(
					<i className="ri-play-large-fill text-4xl p-2 cursor-pointer" onClick={handlePlay}></i>
				):(
					<i class="ri-pause-large-line text-4xl p-2 font-bold cursor-pointer" onClick={handlePause}></i>
				)}
				{(mute)?(
					<i class="ri-volume-mute-fill text-4xl p-2 cursor-pointer" onClick={handleUnmute}></i>
				):(
					<i className="ri-volume-up-fill text-4xl p-2 cursor-pointer" onClick={handleMute}></i>
				)}
			</div>
			<video ref={videoRef} src="https://res.cloudinary.com/dninebxqp/video/upload/v1747991896/tyogvlhbfjqmjwd1nips.mp4" className="w-full h-full object-fill shadow-2xl"/>
			{/* <button onClick={handlePlay} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow-lg">▶️ Play</button> */}
		</div>
	);
};

export default VideoPage;
