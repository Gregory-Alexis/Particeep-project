import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import { useEffect, useReducer, useState } from "react"
import { movies$ } from "./movies"
import { reducer } from "./reducer/reducer.js"
import Pagination from "./components/Pagination/Pagination"
import AllSelect from "./components/SelectParts/AllSelect"

function App() {
	const [{ data }, dispatch] = useReducer(reducer, {
		data: [],
	})
	const [filter, setFilter] = useState("all")
	const [currentPage, setCurrentPage] = useState(1)
	const [postPerPages, setPostPerPages] = useState(16)
	const [showMovies, setShowMovies] = useState("Tout")

	const indexOfLastPost = currentPage * postPerPages
	const indexOfFirstPost = indexOfLastPost - postPerPages
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

	// Pagination
	const paginate = (pageNumber) => setCurrentPage(pageNumber)
	const handleShowMovies = (e) => setShowMovies(e.target.value)
	const handleSelectChange = (e) => setFilter(e.target.value)

	useEffect(() => {
		movies$.then((data) => {
			dispatch({ type: "FETCH_SUCCESS", payload: data })
		})
	}, [])

	return (
		<div>
			<Header />
			<div className="bg-gray-900 min-h-screen">
				<AllSelect
					filter={filter}
					handleSelectChange={handleSelectChange}
					showMovies={showMovies}
					handleShowMovies={handleShowMovies}
					data={data}
				/>
				<Card
					dispatch={dispatch}
					data={currentPosts}
					filter={filter}
					showMovies={showMovies}
					handleShowMovies={handleShowMovies}
					postPerPages={postPerPages}
					setPostPerPages={setPostPerPages}
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
