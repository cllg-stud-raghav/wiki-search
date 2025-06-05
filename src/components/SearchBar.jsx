function SearchBar() {
    const searchTerm="react";
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json
`
    return (
        <p>SearchBar</p>
    )
}
export default SearchBar;