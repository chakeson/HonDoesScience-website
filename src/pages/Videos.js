import React from 'react';
import '../index.css';
import videoData from '../components/videoData';
//Component import
import VideoCard from "../components/videoCard"

function Videos() {
	return (
		<article className="bg-secondary w-full videoH">
			<div className="py-7">
				<div className="grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center items-center">
					{videoData.map((item, index)=>{
						return <VideoCard key={index} {...item} />
					})}
				</div>
			</div>
		</article>
	);
}

export default Videos;
