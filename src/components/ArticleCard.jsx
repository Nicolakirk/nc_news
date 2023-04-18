import { Link } from "react-router-dom"
import SingleCardView from "./SingleCardView";

const ArticleCard =({article, articleList, setArticlesList})=>{
   

   return (
    <li  className="articlecard" key = {article.article_id}> <img src={article.article_img_url}  alt={article.article_title}
    width={300}
    height={250}>
    </img>
   <h4>{article.topic}</h4>
    <h3 > {article.title} by {article.author}
    <br></br>

    <Link to={`/articles/${article.article_id}`} >Read More</Link>
    <SingleCardView article = {article} articlesList={articleList} setArticlesList={setArticlesList}/>
    </h3>
    </li>
          
   );

};

export default ArticleCard;