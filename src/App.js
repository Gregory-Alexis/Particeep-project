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

	const [filter, setFilter] = useState("all")

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
			<Filter
				people={people}
				filter={filter}
				handleSelectChange={handleSelectChange}
			/>
			<Card dispatch={dispatch} data={data} people={people} filter={filter} />
			<Pagination />
		</div>
	)
}

export default App
