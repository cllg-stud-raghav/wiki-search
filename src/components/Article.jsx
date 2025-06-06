import { stripHTML } from "../util"
function Article({ title, content }) {
    return (
        <article className="search-article">
            <h2 id="search-title">{title}</h2>
            <p>{stripHTML(content)}</p>
        </article>
    )
}
export default Article