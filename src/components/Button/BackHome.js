import React from "react"
import { Link } from "react-router-dom"

const BackHome = () => {
	return (
		<button className="border p-2 mx-5 my-3 text-white rounded text-sm transform  ease-in-out duration-200 hover:scale-105 hover:bg-gray-100 hover:bg-opacity-10">
			<Link to="/">Back Home</Link>
		</button>
	)
}

export default BackHome
