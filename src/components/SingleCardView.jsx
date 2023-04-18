import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../utils/api";
import heart from  "../utils/heart.png"
import message from "../utils/message.png"

const SingleCardView=({article, articlesList,setArticlesList})=>{
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const articleId = params.article_id;
    console.log(article);
    console.log(articlesList);
   
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

<h4> Comments =  {articlesList.comment_count} </h4>



   
</ul>
            

        

</div>
    )

}
export default SingleCardView;