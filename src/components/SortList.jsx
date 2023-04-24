import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { sortArticles } from "../utils/api";

import { Link } from "react-router-dom"


const SortList=({setArticlesList, articlesList})=>{
    const [isLoading, setIsLoading]= useState(true);

    const params = useParams();
    const sort_by = params.sort_by;

    useEffect(()=>{
        setIsLoading(true);
        sortArticles(sort_by).then((articles)=>{
            setArticlesList(articles);
            setIsLoading(false);
        })


    },[]);
    if(isLoading){
        return <p> is Loading</p>;
    }
    return(
        <div>

<h2 className="topiclistheader"> Here are the articles sorted by {sort_by}</h2>
            <ul className="sortlist"
            >
             {articlesList.map((article)=>{
             return (  <ArticleCard article={article} articlesList={articlesList} setArticlesList={setArticlesList}/>
           

             )
             })}
                
                
                
                </ul>










 </div>
            

    )






}


export default SortList;