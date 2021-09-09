const DisplayMovies = ({ people, handleShowMovies, showMovies }) => {
	return (
		<div className="input-group p-2 absolute right-0 z-10">
			<select
				className="form-select text-center font-medium cursor-pointer  absolute right-0 mt-2 mr-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
				id="select"
				value={showMovies}
				onChange={handleShowMovies}
			>
				<option value="Tout">Tout</option>
				<option value="4">4</option>
				<option value="8">8</option>
				<option value="12">12</option>
			</select>
		</div>
	)
}

export default DisplayMovies
