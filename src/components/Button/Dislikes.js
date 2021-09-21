import DislikeButton from "../../assets/dislike.svg"

const Dislikes = ({
	movie,
	toggleDiscount,
	disCount,
	setDiscount,
	setToggleDiscount,
	setToggleCount,
	setValue,
	value,
}) => {
	const handleDiscount = () => setDiscount(disCount + 1)

	const handleOnClickDiscount = () => {
		handleDiscount()
		setToggleDiscount(!toggleDiscount)
		setToggleCount(false)
		setValue(value)
	}

	return (
		<div>
			<button
				type="button"
				onClick={() => handleOnClickDiscount()}
				className={`rounded-full w-12 h-12 transform hover:scale-110 duration-200 ${
					toggleDiscount ? "bg-red-500" : "shadow-black"
				}`}
			>
				<img src={DislikeButton} alt="boutton je n'aime pas" />
			</button>
			<span className="flex justify-center">
				{toggleDiscount ? movie.dislikes + 1 : movie.dislikes}
			</span>
		</div>
	)
}

export default Dislikes
