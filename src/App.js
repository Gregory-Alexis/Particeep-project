import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import { useEffect, useReducer, useState } from "react"
import { movies$ } from "./movies"
import { reducer } from "./reducer/reducer.js"
import Filter from "./components/Button/Filter"
import Pagination from "./components/Pagination/Pagination"

function App() {
	const [{ people, data }, dispatch] = useReducer(reducer, {
		people: [],
		data: [],
	})
	console.log(data.length)
	const [filter, setFilter] = useState("all")
	const [currentPage, setCurrentPage] = useState(1)
	const [postPerPages, setPostPerPages] = useState(5)

	//Get current posts
	const indexOfLastPost = currentPage * postPerPages
	const indexOfFirstPost = indexOfLastPost - postPerPages
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

	const handleSelectChange = (e) => {
		setFilter(e.target.value)
	}

	useEffect(() => {
		movies$.then((people) => {
			dispatch({ type: "FETCH_PEOPLE", payload: people })
		})
	}, [])

	useEffect(() => {
		movies$.then((data) => {
			dispatch({ type: "FETCH_SUCCESS", payload: data })
		})
	}, [])

	return (
		<div>
			<Header />
			<div className="bg-gray-500">
				<Filter
					people={people}
					filter={filter}
					handleSelectChange={handleSelectChange}
				/>

				<Card
					dispatch={dispatch}
					data={currentPosts}
					people={people}
					filter={filter}
				/>
				<Pagination postPerPages={postPerPages} totalPosts={data.length} />
			</div>
		</div>
	)
}

export default App
