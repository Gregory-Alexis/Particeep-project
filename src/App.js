import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import Pagination from "./components/Pagination/Pagination"
import AllSelect from "./components/SelectParts/AllSelect"
import { useMovie } from "./context/MovieContext"

function App() {
	let { postPerPages } = useMovie()
	return (
		<>
			<Header />
			<div className="bg-gray-900 min-h-screen h-full">
				<AllSelect />
				<Card postPerPages={postPerPages} />
			</div>
			<Pagination />
		</>
	)
}

export default App
