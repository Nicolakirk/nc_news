import { Link } from "react-router-dom"
import SingleCardView from "./SingleCardView";

      const ArticleCard =({article, articlesList, setArticlesList})=>{
      
   console.log(article)

      return (
      <Link to={`/articles/${article.article_id}`} >
    <section  className="articlecard" key = {article.article_id}> 
   
   
   <h4 > Posted by {article.author} </h4> 
   <h5> {article.title}</h5>
   <img src={article.article_img_url}  alt={article.article_title}
    width={300}
    height={250}>

    </img>
   <section>
   <p>{article.votes} Votes
   </p>
   {article.comment_count ?<p> 💬 {article.comment_count} Comments</p>:null}
   </section>
    </section>
   
    </Link> 
   );

};

export default ArticleCard;