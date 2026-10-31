function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search photos by author..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-purple-500"
    />
  )
}

export default SearchBar