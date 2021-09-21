import { useState } from "react"
import CardList from "./CardList.js"

const Card = ({ dispatch, data, people, filter, showMovies }) => {
	const [refresh, setRefresh] = useState(people)
	const handleRefresh = () => {
		setRefresh(refresh)
	}

	const list = data.filter((el) => {
		if (filter === "all") {
			return true
		} else {
		}
		return el.category.includes(filter)
	})

	return (
		<>
			{showMovies === "Tout" &&
				list.map((el) => {
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
			{showMovies === "4" &&
				list.splice(0, 4).map((el) => {
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
			{showMovies === "8" &&
				list.slice(0, 8).map((el) => {
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
			{showMovies === "12" &&
				list.slice(0, 12).map((el) => {
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
			{list.length === 0 && (
				<button
					type="button"
					className="bg-blue-600 p-2 text-white rounded-lg "
					onClick={handleRefresh}
				>
					Afficher tout les films
				</button>
			)}
		</>
	)
}
export default Card
