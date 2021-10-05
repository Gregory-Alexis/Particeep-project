export const cardReducer = (state, action) => {
	switch (action.type) {
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
				readMore: action.payload,
			}
		default:
			throw new Error(`Unsupported action type ${action.type} in cardReducer`)
	}
}
