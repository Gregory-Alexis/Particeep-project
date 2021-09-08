import { memo, useState } from "react"

const FilterCategories = ({ handleSelectChange, people, filter }) => {
	const [active, setActive] = useState(false)
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
	console.log(uniqueCategory)
	return (
		<div class="relative inline-block text-left">
			<div>
				<button
					type="button"
					class="inline-flex justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={() => setActive(!active)}
				>
					Options
					<svg
						class="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			{active && (
				<div
					class=" mt-2 w-28 text-center absolute z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<div
						className="pointer-events-auto"
						id="select"
						value={filter}
						onChange={handleSelectChange}
					>
						<option value="all">Tous</option>
						{uniqueCategory.map((el) => (
							<option key={el} value={el}>
								{el}
							</option>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default memo(FilterCategories)
