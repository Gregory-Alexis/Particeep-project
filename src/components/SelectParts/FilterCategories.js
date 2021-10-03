import { useMovie } from "../../context/MovieContext"

const FilterCategories = () => {
	const { data, dispatch, filterCategory } = useMovie()
	const uniqueCategory = allCategory(data)

	function allCategory(list) {
		let listTotal = []
		for (let element of list) {
			if ("category" in element) {
				listTotal = listTotal.concat(element.category)
			}
		}
		const listTagsUnique = []
		listTotal.forEach((el) => {
			if (!listTagsUnique.includes(el)) {
				listTagsUnique.push(el)
			}
		})
		return listTagsUnique
	}

	return (
		<div>
			<select
				className="form-select ml-5 w-36 mt-1 text-center font-medium cursor-pointer rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
				id="select"
				value={filterCategory}
				onChange={(e) =>
					dispatch({ type: "FILTER_CATEGORY", payload: e.target.value })
				}
			>
				<option value="all" className="rounded">
					Genres
				</option>
				{uniqueCategory.map((el) => (
					<option key={el} value={el}>
						{el}
					</option>
				))}
			</select>
		</div>
	)
}

export default FilterCategories
