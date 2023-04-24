import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopicArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import SortButtons from "./SortButtons";
import OrderButtons from "./OrderButtons";



const TopicsList =({setArticlesList, articlesList})=>{
    const [isLoading, setIsLoading]= useState(true);

    const params = useParams();
    
    const topic= params.topic;
    const [articlesListbyTopic, setArticlesListByTopic]=useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetchTopicArticles(topic).then((articles)=>{
            console.log(articles)
            setArticlesList(articles);
            setIsLoading(false);
        })
    },[]);
    if(isLoading){
        return <p> is Loading</p>;
    }
        return(
            <div>
                <SortButtons articlesList={articlesList}
            setArticlesList={setArticlesList}/>
            <OrderButtons articlesList={articlesList}
            setArticlesList={setArticlesList}/>
                <h2 className="topiclistheader"> Here are the articles about {topic}</h2>
            <ul className="topiclist"
            >
             {articlesList.map((article)=>{
             return (  <ArticleCard article={article} articlesList={articlesList} setArticlesList={setArticlesList}/>
           

             )
             })}
                
                
                
                </ul>
                
            </div>
        
        )


}

export default TopicsList;