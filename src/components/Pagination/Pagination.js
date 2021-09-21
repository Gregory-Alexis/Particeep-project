const Pagination = ({
	postPerPages,
	totalPosts,
	paginate,
	indexOfFirstPost,
	indexOfLastPost,
}) => {
	const pageNumber = []
	for (let i = 1; i <= Math.ceil(totalPosts / postPerPages); i++) {
		pageNumber.push(i)
	}

	return (
		<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 w-full">
			<div className=" flex-1 flex items-center justify-between">
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
						className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
						aria-label="Pagination"
					>
						{pageNumber.map((number) => {
							return (
								<li
									key={number}
									className="list-none border px-4 py-2 border-gray-400 rounded-sm"
								>
									<a onClick={() => paginate(number)} href={`page=${number}`}>
										{number}
									</a>
								</li>
							)
						})}
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Pagination
