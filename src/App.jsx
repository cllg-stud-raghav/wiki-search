import SearchBar from "./components/SearchBar"
import ArticleList from "./components/ArticleList"
import Logo from "./assets/Logo.png"
import { search } from "./api"
import { useState } from "react"
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    const result = await search(searchTerm);
    setArticles(result);
    setIsLoading(false);
  }
  return (
    <>
      <header>
        <div className="logo-container">
          <img src={Logo} alt="Wiki-logo"></img>
        </div>
        <h1>Wikipedia Search</h1>
        <SearchBar onSearch={handleSearch} />
        {isLoading ? "Loading..." : " "}
      </header>
      <main>
        {isLoading ? " ":<ArticleList articles={articles} />}
      </main>
    </>
  )
}