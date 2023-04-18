import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

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
            return ( <ArticleCard article={article} articlesList={articlesList} setArticlesList={setArticlesList}/>
               
           
     
               
            );
        })}
    </ul>
   
    </div>
    </div>
   
);
}
export default ArticlesList;