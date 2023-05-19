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
    <h2 className="Article-title">Here Are All The Articles</h2>
    <div >
    {/* <OrderButtons articlesList={articlesList}
            setArticlesList={setArticlesList}/> */}

<SortButtons articlesList={articlesList}setArticlesList={setArticlesList}/>

            <TopicButtons topicsListView={topicsListView} setTopicsListView={setTopicsListView}/>
            


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