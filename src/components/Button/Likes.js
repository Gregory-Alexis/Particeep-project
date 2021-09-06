import LikeButton from "../../assets/like.svg"

const Likes = ({
	movie,
	toggleCount,
	count,
	setCount,
	setToggleDiscount,
	setToggleCount,
}) => {
	const handleCount = () => {
		setCount(count + 1)
	}

	const handleOnClickCount = () => {
		handleCount()
		setToggleCount(!toggleCount)
		setToggleDiscount(false)
	}

	return (
		<div>
			<button
				type="button"
				onClick={() => handleOnClickCount()}
				className={`rounded-full w-12 h-12 transform hover:scale-110 duration-200 ${
					toggleCount ? "bg-green-500" : "shadow-black"
				} `}
			>
				<img src={LikeButton} alt="boutton j'aime" />
			</button>
			<span className="flex justify-center ">
				{toggleCount ? movie.likes + 1 : movie.likes}
			</span>
		</div>
	)
}

export default Likes
