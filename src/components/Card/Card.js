import CardList from "./CardList.js"
import { useMovie } from "../../context/MovieContext"
import { CardContextProvider } from "../../context/CardContext.js"

const Card = () => {
	let { list, searchFilter } = useMovie()

	let dataSearch = list.filter((item) => {
		return Object.keys(item).some((key) =>
			item[key]
				.toString()
				.toLowerCase()
				.includes(searchFilter.toString().toLowerCase())
		)
	})

	return (
		<ul className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{dataSearch.map((el) => {
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
