import { memo } from "react"

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
			<div className="input-group mb-3">
				<label className="input-group-text" htmlFor="select">
					Filter per tag
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
		</>
	)
}

export default memo(Filter)
