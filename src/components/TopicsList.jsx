import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopicArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

import {useLocation} from "react-router-dom";



const TopicsList =({setArticlesList, articlesList})=>{
    const [isLoading, setIsLoading]= useState(true);

    const params = useParams();
    
    const topic= params.topic;

   
    const [articlesListbyTopic, setArticlesListByTopic]=useState([]);
    const location = useLocation();
    useEffect(()=>{
        setIsLoading(true);
        fetchTopicArticles(topic).then((articles)=>{
            console.log(articles)
            setArticlesListByTopic(articles);
            setIsLoading(false);
        })
    },[location]);
    if(isLoading){
        return <p> is Loading</p>;
    }
        return(
            <div>
             
          
                <h4 className="topiclistheader"> Here are the articles about {topic}</h4>
            <p className="topicboxes"
            >
                 
             {articlesListbyTopic.map((article)=>{
             return (  <ArticleCard article={article} articlesListbyTopic={articlesListbyTopic} setArticlesListByTopic={setArticlesListByTopic}/>
           

             )
             })}
                
                
                
                </p>
                
            </div>
        
        )


}

export default TopicsList;