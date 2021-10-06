export const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_INIT":
			return {
				...state,
				loading: true,
			}
		case "FETCH_SUCCESS":
			return {
				...state,
				loading: false,
				error: "",
				data: action.payload,
			}
		case "FETCH_FAILURE":
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case "DELETE":
			return {
				...state,
				data: state.data.filter((el) => el.id !== action.id),
			}
		case "FILTER_CATEGORY":
			return {
				...state,
				filterCategory: action.payload,
			}
		case "CURRENT_PAGE":
			return {
				...state,
				currentPage: action.payload,
			}
		case "TOGGLE_LIKES":
			return {
				...state,
				toggleLikes: action.payload,
			}
		case "TOGGLE_DISLIKES":
			return {
				...state,
				toggleDisLikes: action.payload,
			}
		case "READ_MORE":
			return {
				...state,
				readMore: state.postPerPages,
			}
		case "POST_PER_PAGES":
			return {
				...state,
				postPerPages: action.payload,
			}
		case "SEARCH_FILTER":
			return {
				...state,
				searchFilter: action.payload,
			}

		default:
			throw new Error(`Unsupported action type ${action.type} in reducer`)
	}
}
