import Article from "./Article";
function ArticleList({ articles }) {
    const renderArticles = articles.map(article => {
        return <Article key={article.pageid} title={article.title} content={article.snippet} />
    })
    return (
        <section>
            {renderArticles}
        </section>
    )
}
export default ArticleList;