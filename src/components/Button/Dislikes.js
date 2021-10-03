import DislikeButton from "../../assets/dislike.svg"
import { useCard } from "../../context/CardContext"

const Dislikes = ({ disLikes, likes, setValue }) => {
	const { toggleDisLikes, CardDispatch } = useCard()

	const handleOnClickDiscount = () => {
		CardDispatch({ type: "TOGGLE_DISLIKES", payload: !toggleDisLikes })
		CardDispatch({ type: "TOGGLE_LIKES", payload: false })
		toggleDisLikes
			? setValue((likes / (likes + disLikes)) * 100)
			: setValue(((likes - 1) / (likes + disLikes)) * 100)
	}
	console.log(disLikes)
	return (
		<div>
			<button
				type="button"
				onClick={() => handleOnClickDiscount()}
				className={`rounded-full w-12 h-12 transform hover:scale-110 duration-200 ${
					toggleDisLikes && "bg-red-500"
				}`}
			>
				<img src={DislikeButton} alt="boutton je n'aime pas" />
			</button>
			<span className="flex justify-center">
				{toggleDisLikes ? disLikes + 1 : disLikes}
			</span>
		</div>
	)
}

export default Dislikes
