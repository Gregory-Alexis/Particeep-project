import {
	createContext,
	useReducer,
	useContext,
	useState,
	useEffect,
} from "react"
import { reducer } from "../reducer/reducer"
import { movies$ } from "../movies"
import { useIsMounted } from "../hook/useIsMounted"

export const MovieContext = createContext()

export const MovieContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		data: [],
		loading: true,
		error: "",
		filterCategory: "all",
		currentPage: 1,
	})

	const { data, loading, error, filterCategory, currentPage } = state

	const isMounted = useIsMounted()

	const [postPerPages, setPostPerPages] = useState(20)

	const indexOfLastPost = currentPage * postPerPages
	const indexOfFirstPost = indexOfLastPost - postPerPages
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
	const totalPosts = data.length

	// Pagination
	const paginate = (pageNumber) =>
		dispatch({ type: "CURRENT_PAGE", payload: pageNumber })

	useEffect(() => {
		dispatch({ type: "FETCH_INIT" })
		movies$
			.then((data) => {
				if (isMounted.current) {
					dispatch({ type: "FETCH_SUCCESS", payload: data })
				}
			})
			.catch((error) => {
				if (isMounted.current) {
					dispatch({ type: "FETCH_FAILURE", payload: error.message })
				}
			})
	}, [isMounted])

	return (
		<MovieContext.Provider
			value={{
				data,
				filterCategory,
				currentPage,
				postPerPages,
				setPostPerPages,
				currentPosts,
				indexOfLastPost,
				indexOfFirstPost,
				totalPosts,
				paginate,
				loading,
				error,
				dispatch,
			}}
		>
			{children}
		</MovieContext.Provider>
	)
}

export const useMovie = () => {
	const context = useContext(MovieContext)
	if (context === undefined) {
		throw new Error(
			"It seems that you are trying to use GradientContext outside of its provider"
		)
	}
	return context
}
