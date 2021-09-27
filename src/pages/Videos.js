import React from 'react';
import '../index.css';
import videoData from '../components/videoData';
//Component import
import VideoCard from "../components/videoCard"

function Videos() {
	//const videoCount = videoData.length;
	//const rowCountBig = Math.ceil((videoCount/4));
	//const rowCountMedium = Math.ceil((videoCount/3));
	//const rowCountSmall = Math.ceil((videoCount/2));
	//{`grid grid-flow-row grid-cols-3 gap-3 sm:grid-rows-${rowCountSmall} md:grid-rows-${rowCountMedium} lg:grid-rows-${rowCountBig}`}
	return (
		<article className="bg-secondary w-full">
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
