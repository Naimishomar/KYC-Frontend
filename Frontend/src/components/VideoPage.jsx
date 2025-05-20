const VideoPage = () => {
	return (
		<div className="relative h-screen w-full md:aspect-video bg-[#2D2D2D] p-2  flex items-center justify-center">
			<h1 className="text-5xl md:text-8xl font-extrabold text-white uppercase">
				Get to
				<br />
				know us
			</h1>
			<div className="absolute mt-[1%] text-[100px] md:text-[200px] opacity-100 z-10 mix-blend-difference">
				<i className="ri-play-large-fill text-white"></i>
			</div>
			<div className="absolute px-6 md:px-30 pb-8 text-2xl bottom-0 left-0 flex gap-6 items-center text-white p-4">
				<i className="ri-play-large-fill text-4xl"></i>
				<i className="ri-volume-up-fill text-4xl"></i>
			</div>
		</div>
	);
};

export default VideoPage;
