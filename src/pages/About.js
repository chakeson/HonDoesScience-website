import React from 'react';
import '../index.css';


function About() {
	return (
		<article className="bg-secondary w-full aboutH flex flex-col items-center py-10">
			<div className="w-4/5 h-4/5 bg-white flex flex-row md:flex-row sm:flex-col my-4 px-4 py-3 rounded-3xl shadow">
				<div className="w-4/5 md:w-4/5 sm:w-full">
					<h4 className="text-4xl font-semibold px-2">Name title</h4>
					<p className="font-medium text-sm px-2 py-1">About text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
				</div>
				<div className="h-1/5 md:h-1/5 sm:h-full w-1/5 md:w-1/5 sm:w-full">
					<img className="rounded-3xl object-fill" src="https://image.shutterstock.com/image-illustration/lorem-image-size-1x1-square-260nw-1865028457.jpg" alt="image for paper" />
				</div>

			</div>
		</article>
	);
}

export default About;
