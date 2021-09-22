import CardList from "./CardList.js"

const Card = ({
	dispatch,
	data,
	people,
	filter,
	showMovies,
	postPerPages,
	setPostPerPages,
}) => {
	const list = data.filter((el) => {
		if (filter === "all") {
			return true
		}
		return el.category.includes(filter)
	})

	if (showMovies === "4") {
		setPostPerPages((postPerPages = 4))
	} else if (showMovies === "8") {
		setPostPerPages((postPerPages = 8))
	} else if (showMovies === "12") {
		setPostPerPages((postPerPages = 12))
	} else {
		setPostPerPages(postPerPages)
	}

	return (
		<>
			{list.map((el) => {
				const { id, image, title, category, synopsis } = el
				return (
					<li key={id}>
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
				)
			})}
		</>
	)
}
export default Card
