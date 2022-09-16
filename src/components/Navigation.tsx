import React from 'react';
import {Link} from 'react-router-dom'

export function Navigation() {
	return (
		<nav className='items-center h-[50px] flex justify-between px-5 bg-gray-500 text-white'>
			<span className='font-bold'>React и TypeScript 2022 (education)</span>

			<span>
				<Link className="mr-2" to="/">Products</Link>
				<Link to="/about">About</Link>
			</span>
		</nav>
	)
}

