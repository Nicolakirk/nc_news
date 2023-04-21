import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopicArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";



const TopicsList =({setArticlesList, articlesList})=>{
    const [isLoading, setIsLoading]= useState(true);

    const params = useParams();
    console.log(params.topic)
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