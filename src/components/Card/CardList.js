import ProgressBar from "../ProgressBar/ProgressBar"
import { useState } from "react"
import Dislikes from "../Button/Dislikes"
import Likes from "../Button/Likes"
import { useMovie } from "../../context/MovieContext"
import { useCard } from "../../context/CardContext"

const CardList = ({ id, image, title, category, synopsis, movie }) => {
	const { dispatch } = useMovie()
	const { readMore, CardDispatch } = useCard()

	const [likes, setLikes] = useState(movie.likes)
	const [disLikes, setDisLikes] = useState(movie.dislikes)
	const [value, setValue] = useState((likes / (likes + disLikes)) * 100)

	return (
		<div className="flex m-auto w-80 h-auto movie transform hover:scale-105 ease-in-out duration-500">
			<img src={image} alt={`${title} film cover`} />

			<div className="p-4 bg-gray-200 absolute bottom-0 movie-hover ">
				<div className="flex justify-between">
					<h1 className="font-bold text-lg">{title}</h1>
					<button
						type="button"
						className=" bg-blue-600 text-white rounded-md px-2 ease-in-out duration-200 hover:bg-red-600"
						onClick={() => dispatch({ type: "DELETE", id })}
					>
						<small>Supprimer</small>
					</button>
				</div>

				<p className="text-gray-900 opacity-40 font-bold  ">
					<small>{category}</small>
				</p>

				<p className="pt-2 text-sm ">
					{readMore ? synopsis : `${synopsis.slice(0, 100)}...`}{" "}
					<button
						type="button"
						className="text-blue-600 text-sm font-medium"
						onClick={() =>
							CardDispatch({ type: "READ_MORE", payload: !readMore })
						}
					>
						{readMore ? "Show less" : "Read more"}
					</button>
				</p>

				<div className="flex justify-between pt-5">
					<Likes
						setValue={setValue}
						value={value}
						likes={likes}
						disLikes={disLikes}
						movie={movie}
						setLikes={setLikes}
						setDisLikes={setDisLikes}
					/>
					<Dislikes
						setValue={setValue}
						value={value}
						likes={likes}
						disLikes={disLikes}
						setLikes={setLikes}
						setDisLikes={setDisLikes}
						movie={movie}
					/>
				</div>
				<ProgressBar value={value} max={100} />
			</div>
		</div>
	)
}

export default CardList
