import React from 'react';
import '../index.css';
//Component import
//import VideoCard from "../components/videoCard"
import Videos from "./Videos";

function Home() {
	return (
		<>
		<article className="w-full relative">
			<div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center pl-20">
				<div className="text-secondary font-bold text-3xl">Smaller pitch!</div>
				<div className="text-white font-extrabold text-6xl py-1">Lorem Sales</div>
				<div className="text-white font-extrabold text-6xl py-1">text lorem lorem</div>
				<button className="bg-tertiary w-40 h-14 p-2.5 rounded-full flex-wrap content-start text-2xl text-bold text-white transform transition duration-700 hover:scale-105 hover:text-black">
					My Channel
				</button>
			</div>
			<img className="object-fill w-full aboutH" src="https://cdn.discordapp.com/attachments/890698539741630484/891115366795853864/Pink_and_Blue_Galaxy_Gaming_YouTube_Channel_Art_2.png" alt="Galaxy hero section background"/>
		</article>
		<Videos />
		</>
	);
}

export default Home;
