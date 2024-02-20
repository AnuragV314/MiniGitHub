function SortRepos({ onSort, sortType }) {
  return (
    <div className="mb-2 flex justify-center  lg:justify-end">
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg backdrop-blur-sm border-s border-gray-500 hover:bg-gray-600/10 
        ${sortType === "recent"?"border-blue-500":""}`}
        onClick={() => onSort("recent")}
      >
        Most Recent
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg backdrop-blur-sm border-s border-gray-500 hover:bg-gray-600/10
        ${sortType === "stars"?"border-blue-500":""}`}
        onClick={() => onSort("stars")}
      >
        Most Stars
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg backdrop-blur-sm border-s border-gray-500 hover:bg-gray-600/10
        ${sortType === "forks"?"border-blue-500":""}`}
        onClick={() => onSort("forks")}
      >
        Most Forks
      </button>
    </div>
  );
}

export default SortRepos;