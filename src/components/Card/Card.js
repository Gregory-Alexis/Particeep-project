import CardList from "./CardList.js"

const Card = ({ dispatch, data, people, filter }) => {
	const list = data.filter((el) => {
		if (filter === "all") {
			return true
		} else {
		}
		return el.category.includes(filter)
	})
	return (
		<>
			{list.map((el) => {
				const { id, image, title, category, synopsis } = el
				return (
					<ul key={id}>
						<li>
							<CardList
								dispatch={dispatch}
								data={data}
								people={people}
								id={id}
								image={image}
								title={title}
								category={category}
								synopsis={synopsis}
								movie={el}
							/>
						</li>
					</ul>
				)
			})}
		</>
	)
}
export default Card
