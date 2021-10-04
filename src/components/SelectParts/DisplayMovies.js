import { useMovie } from "../../context/MovieContext"

const DisplayMovies = () => {
	const { setPostPerPages } = useMovie()

	return (
		<div>
			<select
				className="form-select ml-7 w-36 mt-1 text-center font-medium cursor-pointer rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none xl:flex"
				onChange={(e) => setPostPerPages(e.target.value)}
			>
				<option value="20">All Movies</option>
				<option value="4">4</option>
				<option value="8">8</option>
				<option value="12">12</option>
			</select>
		</div>
	)
}

export default DisplayMovies
