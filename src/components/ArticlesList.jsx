import { useEffect, useState } from "react";
import { fetchArticles } from "./api";

const ArticlesList =({articlesList, setArticlesList})=>{

    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setIsloading(true);
        fetchArticles().then((articles) => {
            console.log(articles);
          setArticlesList(articles);
          setIsloading(false);
        });
      }, []);
    
      if (isLoading) {
        return <p>Is Loading ....</p>;
      }
return (
    <div>
    <h2 className="articleHeader">Here Are All The Articles</h2>
    <div >
    <ul className="listboxes" >
        {articlesList.map((article) =>{
            return (
                <li  className="articlecard" key = {article.article_id}> <img src={article.article_img_url}  alt={article.article_title}
                width={300}
                height={250}>
                </img>
               
                <h4 > {article.title} by {article.author}
                
                </h4>
                <p> Article id :{article.article_id}</p>
               <p>
                {article.body}
                </p>
               
                
                <p>
                Article Votes = {article.votes}
                </p>
              
                <br></br>
                </li>
            
            
               
            );
        })}
    </ul>
    </div>
    </div>
   
);
}
export default ArticlesList;