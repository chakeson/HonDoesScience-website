import React from 'react';
import '../index.css';
import { AiFillYoutube, AiFillTwitterSquare, AiFillFacebook , AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


function EndAbout() {
	return (
		<footer className="bg-tertiary text-white font-bold text-xl px-36 pt-10 pb-3 flex flex-row justify-between">
            <div>
				<div className="transform transition duration-700 hover:scale-105 hover:text-black">
					<a className="flex flex-row" href="https://www.youtube.com/channel/UChgA88tOPjYfnkG0jT91AAA" style={{alignItems:"center"}}>
						<AiFillYoutube className="mr-3"/>
						YouTube
					</a>
				</div>
				<div className="transform transition duration-700 hover:scale-105 hover:text-black">
					<a className="flex flex-row" href="https://twitter.com/hon_does" style={{alignItems:"center"}}>
						<AiFillTwitterSquare className="mr-3"/>
						Twitter
					</a>
				</div>
				<div className="transform transition duration-700 hover:scale-105 hover:text-black">
					<a className="flex flex-row" href="https://www.instagram.com/hondoesscience/" style={{alignItems:"center"}}>
						<AiFillFacebook className="mr-3"/>
						Instagram
					</a>
				</div>
				<div className="transform transition duration-700 hover:scale-105 hover:text-black">
					<a className="flex flex-row" href="https://www.linkedin.com/in/john-mark-miller-a0aa99122/" style={{alignItems:"center"}}>
						<AiFillLinkedin className="mr-3"/>
						LinkedIn
					</a>
				</div>
			</div>
			<div>
				<p className="text-secondary w-80 flex flex-row">
					Site was made by 
					<a  className="flex flex-row px-1 transform transition duration-700 hover:scale-105 hover:text-black" href="https://github.com/chakeson" style={{justifyContent:"center",alignItems:"center"}}>
						chakeson
						<AiFillGithub />
					</a>
					
				</p>
			</div>

		</footer>
	);
}

export default EndAbout;
