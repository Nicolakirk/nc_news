import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";

const SingleCardView=({article, articlesList,setArticlesList})=>{
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const articleId = params.article_id;
    
   
    useEffect(() => {
        setIsLoading(true);
        fetchArticlesById(articleId).then((article) => {
          setArticlesList(article);
        setIsLoading(false);
        });
      }, []);
    
      if (isLoading) {
        return <p></p>;
      }

    
   return (
<div>
<ul>
<h2>{articlesList.title} </h2>
<h2>{articlesList.author}</h2>
<img src={articlesList.article_img_url}  alt={articlesList.article_title}
    width={400}
    height={350}>
    </img>
<p> {articlesList.body} </p>
<h4> votes =      
{articlesList.votes}  </h4>
<Link to={`/articles/${articlesList.article_id}/comments`}>
<h4> Comments =  {articlesList.comment_count} </h4>
</Link>


   
</ul>
            

        

</div>
    )

}
export default SingleCardView;