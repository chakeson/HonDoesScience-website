import React from 'react';
import '../index.css';


function VideoCard({id , title , thumbnail, url }) {

    return (
        <a href={url} className="shadow flex w-72 h-64 bg-white m-2.5 flex-col rounded-3xl transform transition duration-700 hover:scale-105 hover:shadow-xl">
            <img src={thumbnail} alt="video thumbnail" className="h-40 w-full rounded-t-3xl"/>
            <h4 className="p-4 font-bold">{title}</h4>
        </a>
        
	);
}

export default VideoCard;
