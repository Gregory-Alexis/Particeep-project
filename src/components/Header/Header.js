import { useState } from "react"
import { useMovie } from "../../context/MovieContext"

const Header = () => {
	const { searchFilter, handleFilter } = useMovie()

	return (
		<div className="bg-blue-900 text-white text-center p-5 text-xl flex">
			<div className="flex justify-center items-center ml-48 container">
				<h1>
					React Movie Project by{" "}
					<a
						href="https://github.com/Particeep/react-interview/blob/master/README.md"
						rel="noopener noreferrer"
						target="_blank"
						alt="Lien github"
						className="underline hover:text-blue-400"
					>
						Particeep
					</a>
				</h1>
			</div>
			<div>
				<label htmlFor="filter"></label>
				<input
					type="text"
					value={searchFilter}
					onChange={handleFilter}
					className="rounded-lg bg-blue-600 text-black text-sm"
					placeholder="    Search..."
				/>
			</div>
		</div>
	)
}

export default Header
