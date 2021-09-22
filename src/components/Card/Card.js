import { memo } from "react"
import CardList from "./CardList.js"

const Card = ({
	dispatch,
	data,
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
	}

	return (
		<ul className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{list.map((el) => {
				const { id, image, title, category, synopsis } = el
				return (
					<li key={id}>
						<CardList
							dispatch={dispatch}
							data={data}
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
		</ul>
	)
}
export default memo(Card)
