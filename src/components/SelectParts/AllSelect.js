import DisplayMovies from "./DisplayMovies"
import FilterCategories from "./FilterCategories"

const AllSelect = ({
	people,
	filter,
	handleSelectChange,
	handleShowMovies,
	showMovies,
}) => {
	return (
		<div className="flex justify-between">
			<FilterCategories
				people={people}
				filter={filter}
				handleSelectChange={handleSelectChange}
			/>
			<DisplayMovies
				people={people}
				showMovies={showMovies}
				handleShowMovies={handleShowMovies}
			/>
		</div>
	)
}

export default AllSelect
