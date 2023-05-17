import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
 


import { Link } from "react-router-dom"
import { getArticles, orderArticles, sortArticles } from "../utils/api"
import ArticleCard from "./ArticleCard";
 

const OrderButtons =({setArticlesList,articlesList})=>{
    const[sort, setSort]= useState("")
    const[order, setOrder]=useState("")
    const[isLoading, setisLoading]=useState(true)
    const[articleOrder,setArticleOrder ]=useState([])

    const params = useParams();
    const sort_by = params.sort_by;
    useEffect(()=>{
       setisLoading(true);

    orderArticles(order)
    .then((newarticles)=>{
        setArticlesList(newarticles);
       })
        .catch((err)=>{
            console.log(err);
        });
       
    },[ order]);

 



    return (
        <div>
 <button onClick={()=> setOrder("desc")} >Sort By Date Desc</button>
 <button onClick={()=> setOrder("asc")} >Sort By Date Asc</button>
 
                
                
                
              
 </div>
 
 


   )
}



export default OrderButtons;