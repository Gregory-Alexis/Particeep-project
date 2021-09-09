import { memo } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"

const FilterCategories = ({ handleSelectChange, people, filter }) => {
	const uniqueCategory = allCategory(people)

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
		<div className="input-group p-2 absolute left-0 z-10">
			<select
				className="form-select text-center font-medium cursor-pointer  absolute left-0 mt-2 ml-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
				id="select"
				value={filter}
				onChange={handleSelectChange}
			>
				<option value="all" className="rounded">
					Tous
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

export default memo(FilterCategories)
