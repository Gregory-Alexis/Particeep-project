import { useMovie } from "../../context/MovieContext"

const Pagination = () => {
	const {
		postPerPages,
		paginate,
		indexOfFirstPost,
		dispatch,
		currentPage,
		totalPosts,
	} = useMovie()

	let { indexOfLastPost } = useMovie()

	const pageNumber = []
	for (let i = 1; i <= Math.ceil(totalPosts / postPerPages); i++) {
		pageNumber.push(i)
	}

	return (
		<footer className="bg-white px-4 py-3 flex items-center justify-between border-t w-full sm:px-6">
			<div className=" flex-1 flex items-center justify-between sm:hidden">
				<button
					onClick={() =>
						dispatch({ type: "CURRENT_PAGE", payload: currentPage - 1 })
					}
					className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<button
					onClick={() =>
						dispatch({ type: "CURRENT_PAGE", payload: currentPage + 1 })
					}
					className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
					disabled={indexOfLastPost > totalPosts}
				>
					Next
				</button>
			</div>
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Showing <span className="font-medium">{indexOfFirstPost + 1}</span>{" "}
						to{" "}
						<span className="font-medium">
							{indexOfLastPost > totalPosts
								? (indexOfLastPost = totalPosts)
								: indexOfLastPost}
						</span>{" "}
						of <span className="font-medium">{totalPosts}</span> results
					</p>
				</div>

				<div>
					<nav
						className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px "
						aria-label="Pagination"
					>
						{pageNumber.map((number) => {
							return (
								<li
									key={number}
									className="list-none border px-4 py-2 border-gray-400 rounded-sm"
								>
									<button
										type="button"
										onClick={(e) => {
											e.preventDefault()
											paginate(number)
										}}
									>
										{number}
									</button>
								</li>
							)
						})}
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Pagination
