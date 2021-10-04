import CardList from "./CardList.js"
import { useMovie } from "../../context/MovieContext"
import { CardContextProvider } from "../../context/CardContext.js"

const Card = () => {
	let { filterCategory, currentPosts } = useMovie()

	const list = currentPosts.filter((el) => {
		if (filterCategory === "all") {
			return true
		}
		return el.category.includes(filterCategory)
	})

	return (
		<ul className={`md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
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
							/>
						</CardContextProvider>
					</li>
				)
			})}
		</ul>
	)
}
export default Card
