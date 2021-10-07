import CardList from "../components/Card/CardList"
import Header from "../components/Header/Header"
import { CardContextProvider } from "../context/CardContext"
import { useMovie } from "../context/MovieContext"

const ThrillerPage = () => {
	let { list, searchFilter, postPerPages } = useMovie()

	let dataSearch = list.filter((item) => {
		return Object.keys(item).some((key) =>
			item[key]
				.toString()
				.toLowerCase()
				.includes(searchFilter.toString().toLowerCase())
		)
	})

	let newData = dataSearch.filter((item) => {
		return item.category.includes("Thriller")
	})
	return (
		<div>
			<Header />
			<div className="bg-gray-900 h-screen">
				<ul
					className={` py-5 gap-y-6 grid md:grid-cols-2 lg:grid-cols-3 ${
						postPerPages === "4" ? "xl:grid-cols-4" : "xl:grid-cols-5"
					}`}
				>
					{newData.map((el) => {
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
			</div>
		</div>
	)
}

export default ThrillerPage
