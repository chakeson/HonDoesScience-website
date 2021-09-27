import React from 'react';
import '../index.css';
import { AiFillYoutube, AiFillTwitterSquare, AiFillFacebook , AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


function EndAbout() {
	return (
		<footer className="bg-tertiary text-white font-bold text-xl px-36 pt-10 pb-3 flex flex-row justify-between">
            <div>
				<div className=""><a className="flex flex-row" href="https://www.youtube.com/channel/UChgA88tOPjYfnkG0jT91AAA"><AiFillYoutube className="mr-3"/>YouTube</a></div>
				<div className=""><a className="flex flex-row" href=""><AiFillTwitterSquare className="mr-3"/>Twitter</a></div>
				<div className=""><a className="flex flex-row" href=""><AiFillFacebook className="mr-3"/>Instagram</a></div>
				<div className=""><a className="flex flex-row" href=""><AiFillLinkedin className="mr-3"/>LinkedIn</a></div>
			</div>
			<div>
				<p className="text-secondary py-7 w-80 flex flex-row">Site was made by <a  className="px-1" href="https://github.com/chakeson">chakeson</a><AiFillGithub /></p>
			</div>

		</footer>
	);
}

export default EndAbout;
