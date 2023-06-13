import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import TopicButtons from "./TopicButtons";

import OrderButtons from "./OrderButtons";
import SortButtons from "./SortButtons";

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
    <h2 className="Article-title">NC News</h2>
    <p className="article-paragraph"> Welcome to NC News. This is a Reddit style news app. You can view articles sorted by comments, votes, topics and date.  Add a comment to an article, vote for an article and delete articles. </p>
    <div >
    {/* <OrderButtons articlesList={articlesList}
            setArticlesList={setArticlesList}/> */}


            


           <p className="listboxes" >
            {articlesList.map((article) =>{
            return ( <ArticleCard article={article} articlesList={articlesList} setArticlesList={setArticlesList}/>
          
               
            );
        })}
    </p>
   
    </div>
    </div>
   
);
}
export default ArticlesList;