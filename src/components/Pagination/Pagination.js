export default function Example({
	postPerPages,
	totalPosts,
	paginate,
	indexOfFirstPost,
	indexOfLastPost,
}) {
	const pageNumber = []
	for (let i = 1; i <= Math.ceil(totalPosts / postPerPages); i++) {
		pageNumber.push(i)
	}
	return (
		<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 w-full">
			<div className="flex-1 flex justify-between sm:hidden">
				<a
					href="!#"
					className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Previous
				</a>
				<a
					href="!#"
					className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Next
				</a>
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
						className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
						aria-label="Pagination"
					>
						{pageNumber.map((number) => {
							console.log(pageNumber.length)
							return (
								<li
									key={number}
									className="list-none border px-4 py-2 border-gray-400 rounded-sm"
								>
									<a onClick={() => paginate(number)} href="!#">
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
