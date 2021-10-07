import { useMovie } from "../../context/MovieContext"

const DisplayMovies = () => {
	const { dispatch } = useMovie()

	return (
		<div className="inline-block mr-5 dropdown">
			<div>
				<button
					type="button"
					className="inline-flex justify-center w-full rounded-md border border-white shadow-sm px-4 py-2 text-white text-sm font-medium bg-opacity-100"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
				>
					Display
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fillRule="currentColor"
						aria-hidden="true"
						stroke="#ffffff"
						fill="#ffffff"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<div
				className="origin-top-left absolute right-0 z-10 mt-2 w-36 rounded-md shadow-lg bg-gray-900  dropdown-menu bg-opacity-90 border border-white "
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabIndex="-1"
			>
				<div
					className="py-1 text-center flex-col items-center flex "
					role="none"
				>
					<button
						className="text-white hover:underline hover:bg-gray-700 rounded-sm w-full"
						value="4"
						onClick={(e) =>
							dispatch({ type: "POST_PER_PAGES", payload: e.target.value })
						}
					>
						4
					</button>
					<button
						className="text-white hover:underline hover:bg-gray-700 rounded-sm w-full"
						value="8"
						onClick={(e) =>
							dispatch({ type: "POST_PER_PAGES", payload: e.target.value })
						}
					>
						8
					</button>
					<button
						className="text-white hover:underline hover:bg-gray-700 rounded-sm w-full"
						value="12"
						onClick={(e) =>
							dispatch({ type: "POST_PER_PAGES", payload: e.target.value })
						}
					>
						12
					</button>
				</div>
			</div>
		</div>
	)
}

export default DisplayMovies
