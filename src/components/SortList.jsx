import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { sortArticles } from "../utils/api";

import { Link } from "react-router-dom"
import OrderButtons from "./OrderButtons";


const SortList=({setArticlesList, articlesList})=>{
    const [isLoading, setIsLoading]= useState(true);

    const params = useParams();
    const sort_by = params.sort_by;
    const [sortList, setSortList]=useState([])
    const[order, setOrder]=useState("")
  

    useEffect(()=>{
        setIsLoading(true);
      
        sortArticles(sort_by)
        .then((newArticles)=>{
            setSortList(newArticles);
            setIsLoading(false);
        })


    },[]);
    if(isLoading){
        return <p> is Loading</p>;
    }
    return(
        <div>

{sort_by === "created_at" ?<h2 className="sortlistheader"> Here are the articles Sorted by Date </h2>  :null}

{sort_by === "votes" ?<h2 className="sortlistheader"> Here are the articles Sorted by Number of Votes </h2>  :null}
{sort_by === "comment_count" ?<h2 className="sortlistheader"> Here are the articles Sorted byNumber of Comments </h2>  :null}
<OrderButtons sortList={sortList} setSortList={setSortList}/>
            <p className="sortlist"
            >
             {sortList.map((article)=>{
             return (  <ArticleCard article={article} articlesList={articlesList} setArticlesList={setArticlesList}/>
           

             )
             })}
                 
                
                </p>


 </div>
            

    )






}


export default SortList;