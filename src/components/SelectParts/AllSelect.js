import DisplayMovies from "./DisplayMovies"
import FilterCategories from "./FilterCategories"

const AllSelect = ({
	filter,
	handleSelectChange,
	handleShowMovies,
	showMovies,
	data,
}) => {
	return (
		<div className="flex justify-between mb-32">
			<FilterCategories
				filter={filter}
				handleSelectChange={handleSelectChange}
				data={data}
			/>
			<DisplayMovies
				showMovies={showMovies}
				handleShowMovies={handleShowMovies}
			/>
		</div>
	)
}

export default AllSelect
