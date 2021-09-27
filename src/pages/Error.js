import React from 'react';
import { Link } from 'react-router-dom'
import '../index.css';

function Error() {
	return (
		<div className="videoH bg-secondary">
			<article className="bg-secondary w-full aboutH flex flex-col items-center py-10">
				<div className="w-4/5 h-4/5 bg-white flex flex-col items-center my-4 px-4 py-3 rounded-3xl shadow">
					<h2 className="font-bold text-8xl pt-14 pb-5">Error 404</h2>
					<h3 className="font-bold text-xl py-5">Looks like something went wrong</h3>
					<Link to="/" className="text-center text-4xl bg-tertiary w-40 h-14 p-1 rounded-full flex-wrap content-start text-bold text-white transform transition duration-700 hover:scale-105 hover:text-black">
						Home
					</Link>
				</div>
			</article>
		</div>
	);
}

export default Error;
