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
		case "FETCH_PEOPLE":
			return {
				...state,
				loading: false,
				error: "",
				people: action.payload,
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
				loading: false,
			}
		default:
			throw new Error("Unsupported action type")
	}
}
