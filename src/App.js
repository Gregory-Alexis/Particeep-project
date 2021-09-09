import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import { useEffect, useReducer, useState } from "react"
import { movies$ } from "./movies"
import { reducer } from "./reducer/reducer.js"
import Pagination from "./components/Pagination/Pagination"
import AllSelect from "./components/SelectParts/AllSelect"

function App() {
	const [{ people, data }, dispatch] = useReducer(reducer, {
		people: [],
		data: [],
	})
	console.log(data.length)
	const [filter, setFilter] = useState("all")
	const [currentPage, setCurrentPage] = useState(1)
	const [postPerPages] = useState(15)
	const [showMovies, setShowMovies] = useState("Tout")

	//Get current posts
	const indexOfLastPost = currentPage * postPerPages
	const indexOfFirstPost = indexOfLastPost - postPerPages
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)
	const handleShowMovies = (e) => setShowMovies(e.target.value)
	const handleSelectChange = (e) => setFilter(e.target.value)

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
			<div className="bg-gray-500 min-h-screen">
				<AllSelect
					people={people}
					filter={filter}
					handleSelectChange={handleSelectChange}
					showMovies={showMovies}
					handleShowMovies={handleShowMovies}
				/>

				<Card
					dispatch={dispatch}
					data={currentPosts}
					people={people}
					filter={filter}
					showMovies={showMovies}
					handleShowMovies={handleShowMovies}
				/>
				<Pagination
					postPerPages={postPerPages}
					totalPosts={data.length}
					paginate={paginate}
					indexOfFirstPost={indexOfFirstPost}
					indexOfLastPost={indexOfLastPost}
				/>
			</div>
		</div>
	)
}

export default App
