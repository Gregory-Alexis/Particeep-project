import DisplayMovies from "./DisplayMovies"
import FilterCategories from "./FilterCategories"

const AllSelect = () => {
	return (
		<div className="py-5 flex justify-between">
			<FilterCategories />
			<DisplayMovies />
		</div>
	)
}

export default AllSelect
