import CardList from "./CardList.js"

const Card = ({ dispatch, data, people, filter, showMovies }) => {
	const list = data.filter((el) => {
		if (filter === "all") {
			return true
		} else {
		}
		return el.category.includes(filter)
	})
	console.log(typeof showMovies)
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
				list.slice(0, 4).map((el) => {
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
		</>
	)
}
export default Card
