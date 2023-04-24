import { useEffect } from "react"
import { useState } from "react"

 


import { Link } from "react-router-dom"
import { orderArticles, sortArticles } from "../utils/api"
 

const OrderButtons =({setArticlesList,articlesList})=>{
    const[sort, setSort]= useState("")
    const[order, setOrder]=useState("")
    const[isLoading, setisLoading]=useState(true)

    useEffect(()=>{
       setisLoading(true);

    orderArticles(order)
       
       .then((articles)=>{
        setArticlesList(articles);
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