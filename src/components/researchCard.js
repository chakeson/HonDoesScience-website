import React from 'react';
import '../index.css';

//bg-tertiary w-40 h-14 p-2.5 rounded-full flex-wrap content-start text-2xl text-bold text-white
function ResearchCard({id , title , paper, link, citation, img }) {
	return (
        <div className="w-4/5 bg-white flex flex-row md:flex-row sm:flex-col justify-between my-4 px-4 py-3 rounded-3xl">
            <div className="w-4/5">
                <div className="flex flex-row  justify-between pr-7">
                    <h4 className="text-4xl font-semibold px-2 ">{title}</h4>
                    <div>
                        <a className="font-bold text-xl bg-tertiary text-white rounded-full px-2 py-1 mr-2" href={link}>Read More</a>
                        <button className="font-bold text-xl bg-tertiary text-white rounded-full px-2 py-1" onClick={()=>{navigator.clipboard.writeText(citation)}} >Cite This</button>
                    </div>
                </div>
                <p className="font-medium text-sm px-2 py-1">{paper}</p>
            </div>
            <div className="w-1/5 h-1/5 flex items-center place-content-center">
                <img className="rounded-3xl object-fill" src={img} alt="image for paper" />
            </div>

        </div>
	);
}

export default ResearchCard;
