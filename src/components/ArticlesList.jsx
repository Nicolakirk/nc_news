import { useEffect, useState } from "react";
import { fetchArticles } from "./api";

const ArticlesList =(articlesList, setArticlesList)=>{

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
    <h2 className="articleHeader">Here are all the articles..</h2>
    <ul>
        {articlesList.map((article) =>{
            return (
                <li key = {article.article_id}> <img src={article.article_img_url}>
                </img>
                <section>
                    {article.article_title}{article.article_id}

                </section>
                </li>
            
            
               
            );
        })}
    </ul>
    </div>
   
);
}
export default ArticlesList;