import DisplayMovies from "./DisplayMovies"
import FilterCategories from "./FilterCategories"

const AllSelect = ({ people, filter, handleSelectChange }) => {
	return (
		<div className="flex justify-between">
			<FilterCategories
				people={people}
				filter={filter}
				handleSelectChange={handleSelectChange}
			/>
			<DisplayMovies />
		</div>
	)
}

export default AllSelect
