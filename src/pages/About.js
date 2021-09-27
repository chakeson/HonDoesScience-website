import React from 'react';
import '../index.css';


function About() {
	return (
		<article className="bg-secondary w-full aboutH flex flex-col items-center py-10">
			<div className="w-4/5 h-4/5 bg-white flex flex-row my-4 px-4 py-3 rounded-3xl">
				<div>
					<h4 className="text-4xl font-semibold px-2">Name title</h4>
					<p className="font-medium text-sm px-2 py-1">About text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
				</div>
				<div>
					<img className="rounded-3xl" src="https://image.shutterstock.com/image-illustration/lorem-image-size-1x1-square-260nw-1865028457.jpg" alt="image for paper" />
				</div>

			</div>
		</article>
	);
}

export default About;
