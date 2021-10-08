import LikeButton from "../../assets/like.svg"
import { useCard } from "../../context/CardContext"

const Likes = ({ likes, disLikes, setValue }) => {
	const { toggleLikes, CardDispatch } = useCard()

	const handleOnClickCount = () => {
		CardDispatch({ type: "TOGGLE_LIKES", payload: !toggleLikes })
		CardDispatch({ type: "TOGGLE_DISLIKES", payload: false })
		toggleLikes
			? //gère la valeur en pourcentage de likes
			  setValue((likes / (likes + disLikes)) * 100)
			: setValue(((likes + 1) / (likes + disLikes)) * 100)
	}

	return (
		<div>
			<button
				type="button"
				onClick={handleOnClickCount}
				className={`rounded-full w-12 h-12 transform hover:scale-110 duration-200 ${
					toggleLikes && "bg-green-500"
				} `}
			>
				<img src={LikeButton} alt="boutton j'aime" />
			</button>
			<span className="flex justify-center">
				{toggleLikes ? likes + 1 : likes}
			</span>
		</div>
	)
}

export default Likes
