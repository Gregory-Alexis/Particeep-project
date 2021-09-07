import { memo } from "react"
import AffichageFilm from "../Pagination/AffichageFilm"

const Filter = ({ handleSelectChange, people, filter }) => {
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
		<>
			<div className="input-group p-2 flex justify-between">
				<div>
					<label className="input-group-text mx-2" htmlFor="select">
						Filtrer par catégorie
					</label>
					<select
						className="form-select"
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
					</select>
				</div>
				<AffichageFilm />
			</div>
		</>
	)
}

export default memo(Filter)
