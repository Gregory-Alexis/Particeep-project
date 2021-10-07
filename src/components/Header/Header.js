import { useMovie } from "../../context/MovieContext"

const Header = () => {
	const { searchFilter, dispatch } = useMovie()

	const handleFilter = (event) => {
		event.preventDefault()
		dispatch({ type: "SEARCH_FILTER", payload: event.target.value })
	}

	return (
		<div className="bg-blue-900 text-white text-center p-5 text-xl lg:flex">
			<div className="lg:flex lg:justify-center lg:items-center lg:ml-48 lg:container">
				<h1>
					React Movie Project by{" "}
					<a
						href="https://github.com/Particeep/react-interview/blob/master/README.md"
						rel="noopener noreferrer"
						target="_blank"
						alt="Lien github"
						className="underline hover:text-blue-300 "
					>
						Particeep
					</a>
				</h1>
			</div>
			<div>
				<label htmlFor="text"></label>
				<input
					type="text"
					value={searchFilter}
					onChange={handleFilter}
					className="rounded bg-gray-800 text-black text-sm focus:bg-white outline-none placeholder-white focus:placeholder-gray-400 "
					placeholder="    Search..."
				/>
			</div>
		</div>
	)
}

export default Header
