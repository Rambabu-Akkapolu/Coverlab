import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'
const Header = () => {

	const tweetText = encodeURIComponent(`Create blog covers with Coverlab by @A_Rambabu_  https://github.com/Rambabu-Akkapolu/Coverlab`)

	return (

		<div className="bg-white text-xl md:px-2 flex  border-dashed border-b-2 border-gray-100 p-2">
			<Link to="/" className="flex items-center">
				<img src={logo} alt="Coverlab" className="w-8 h-8 mx-4" />
				<h1 className="font-semibold">Coverlab</h1>
			</Link>

			<div className="ml-auto md:mr-4 flex items-center ">
				{/* Social links */}
				<a href="mailto:rambabuakkapolu970@gmail.com" className="mx-2 hidden md:inline text-gray-600 hover:text-gray-800 text-xs">Email</a>
				<a href="https://www.linkedin.com/in/rambabu-akkapolu/" target="_blank" rel="noreferrer" className="mx-2 hidden md:inline text-gray-600 hover:text-gray-800 text-xs">LinkedIn</a>
				<a href="https://x.com/A_Rambabu_" target="_blank" rel="noreferrer" className="mx-2 hidden md:inline text-gray-600 hover:text-gray-800 text-xs">X</a>
				<a href="https://github.com/Rambabu-Akkapolu" target="_blank" rel="noreferrer" className="mx-2 hidden md:inline text-gray-600 hover:text-gray-800 text-xs">GitHub</a>

				<a href="https://github.com/Rambabu-Akkapolu/Coverlab" target="_blank" rel="noreferrer" className="bg-gray-700 hover:bg-gray-800 px-4 rounded-full p-1 text-white md:text-sm md:flex hidden items-center text-xs mx-2 font-Nunito">⭐ Star on Github</a>
				<a href={`https://x.com/intent/tweet?text=${tweetText}`} className="mx-2 bg-blue-400 hover:bg-blue-500 md:text-sm text-xs rounded-full px-4 font-semibold text-white p-1">Share on Twitter</a>
			</div>

		</div>

	);
}

export default Header;