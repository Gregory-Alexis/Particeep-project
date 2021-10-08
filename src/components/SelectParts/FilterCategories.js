import { useState } from "react"
import { Link } from "react-router-dom"
import { useMovie } from "../../context/MovieContext"

const FilterCategories = () => {
	const { data } = useMovie()

	const uniqueCategory = allCategory(data)

	function allCategory(list) {
		// récupère toute les catégories
		let listTotal = []
		for (let element of list) {
			if ("category" in element) {
				listTotal = listTotal.concat(element.category)
			}
		}
		// si la catégorie n'est pas déjà inclut dans l'array "listTagsUnique" alors on l'ajoute
		const listTagsUnique = []
		listTotal.forEach((el) => {
			if (!listTagsUnique.includes(el)) {
				listTagsUnique.push(el)
			}
		})
		return listTagsUnique
	}

	const [active, setActive] = useState(false)

	return (
		<div className="inline-block text-left dropdown ml-5">
			<div>
				<button
					type="button"
					className="inline-flex justify-center w-full rounded-md border border-white shadow-sm px-4 py-2 text-white text-sm font-medium bg-opacity-100"
					id="filter-category"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={() => setActive(!active)}
				>
					Genres
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fillRule="currentColor"
						aria-hidden="true"
						stroke="#ffffff"
						fill="#ffffff"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<div
				className="origin-top-right absolute left-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-gray-900  dropdown-menu bg-opacity-90 border border-white"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="filter-category"
				tabIndex="-1"
			>
				<div className="py-1" role="none">
					{uniqueCategory.map((el) => {
						return (
							<ul key={el}>
								<Link
									to={`/categorie/${el}`}
									className="text-white font-semibold block w-full text-sm text-center "
								>
									<li className="p-2 hover:bg-gray-700 hover:underline rounded-sm">
										{el}
									</li>
								</Link>
							</ul>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default FilterCategories
