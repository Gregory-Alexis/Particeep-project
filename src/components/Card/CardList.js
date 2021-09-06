import { useState } from "react"
import Dislikes from "../Button/Dislikes"
import Likes from "../Button/Likes"

const CardList = ({
	id,
	image,
	title,
	category,
	synopsis,
	movie,
	dispatch,
}) => {
	const [disCount, setDiscount] = useState(movie.dislikes)
	const [count, setCount] = useState(movie.likes)
	const [readMore, setReadMore] = useState(false)
	const [toggleCount, setToggleCount] = useState(false)
	const [toggleDiscount, setToggleDiscount] = useState(false)

	const handleRead = () => {
		setReadMore(!readMore)
	}

	const handleDelete = () => {
		dispatch({ type: "DELETE", id })
	}

	return (
		<>
			<div className="py-5 bg-gray-100 flex justify-center items-center">
				<div className="w-80 rounded-md shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
					<img src={image} alt={`${title} film cover`} />
					<div className="p-4 bg-white">
						<div className="flex justify-between">
							<h1 className="font-bold text-lg">{title}</h1>
							<button
								type="button"
								className=" bg-blue-600 text-white rounded-md px-2 py-1"
								onClick={handleDelete}
							>
								<small>Pas intéressé</small>
							</button>
						</div>
						<p className="text-gray-800 opacity-50 font-medium">
							<small>{category}</small>
						</p>
						<p className="pt-2 textbase">
							{readMore ? synopsis : `${synopsis.slice(0, 100)}...`}{" "}
							<button
								type="button"
								className="text-blue-600 text-sm"
								onClick={handleRead}
							>
								{readMore ? "Show less" : "Read more"}
							</button>
						</p>
						<div className="flex justify-between pt-5">
							<Likes
								movie={movie}
								toggleCount={toggleCount}
								setToggleCount={setToggleCount}
								setToggleDiscount={setToggleDiscount}
								count={count}
								setCount={setCount}
							/>

							<Dislikes
								movie={movie}
								toggleDiscount={toggleDiscount}
								setToggleDiscount={setToggleDiscount}
								setToggleCount={setToggleCount}
								disCount={disCount}
								setDiscount={setDiscount}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardList
