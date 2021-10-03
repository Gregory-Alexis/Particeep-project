import CardList from "./CardList.js"
import { useMovie } from "../../context/MovieContext"
import { CardContextProvider } from "../../context/CardContext.js"

const Card = ({ postPerPages }) => {
	const { filterCategory, showMovies, setPostPerPages, currentPosts } =
		useMovie()

	const list = currentPosts.filter((el) => {
		if (filterCategory === "all") {
			return true
		}
		return el.category.includes(filterCategory)
	})

	if (showMovies === "4") {
		setPostPerPages((postPerPages = 4))
	} else if (showMovies === "8") {
		setPostPerPages((postPerPages = 8))
	} else if (showMovies === "12") {
		setPostPerPages((postPerPages = 12))
	}

	return (
		<ul
			className={`md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
				showMovies === "4" && "xl:grid-cols-4"
			}`}
		>
			{list.map((el) => {
				const { id, image, title, category, synopsis } = el
				return (
					<li key={id}>
						<CardContextProvider>
							<CardList
								id={id}
								image={image}
								title={title}
								category={category}
								synopsis={synopsis}
								movie={el}
								showMovies={showMovies}
							/>
						</CardContextProvider>
					</li>
				)
			})}
		</ul>
	)
}
export default Card
