import React from 'react';
import '../index.css';
import researchData from '../components/researchData';
//Component import
import ResearchCard from "../components/researchCard";

function Research() {
	return (
		<div className="flex flex-col items-center bg-secondary">
			{researchData.map((item, index)=>{
				return <ResearchCard key={index} {...item} />
			})}
            
		</div>
	);
}

export default Research;
