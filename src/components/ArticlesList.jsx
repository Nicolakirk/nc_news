import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import TopicButtons from "./TopicButtons";

const ArticlesList =({articlesList, setArticlesList, topicsListView, setTopicsListView})=>{

    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setIsloading(true);
        fetchArticles().then((articles) => {
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
   <TopicButtons topicsListView={topicsListView} setTopicsListView={setTopicsListView}/>
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