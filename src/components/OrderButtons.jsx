import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
 


import { Link } from "react-router-dom"
import { getArticles, orderArticles, sortArticles } from "../utils/api"
import ArticleCard from "./ArticleCard";
 

const OrderButtons =({setSortList, sortList})=>{
    const[sort, setSort]= useState("")
    const[order, setOrder]=useState("")
    const[isLoading, setisLoading]=useState(true)
    const[articleOrder,setArticleOrder ]=useState([])

    const params = useParams();
    const sort_by = params.sort_by;


    const onChangeValue=(event)=>{
        console.log(event.target.value);
    
const order = event.target.value
    getArticles(sort_by, order)
    .then((newarticles)=>{
        setSortList(newarticles);
       })
        .catch((err)=>{
            console.log(err);
        });
       
 
    }


    return (
//         <div>
//             <nav className="orderbuttons">
//  <button onClick={()=> setOrder("desc")}className="orderbutton1" >Sort By Desc</button>
//  <button onClick={()=> setOrder("asc")} className="orderbutton2" >Sort By Asc</button>
//  </nav>
         
//  </div>
//  <button className="orderbutton1"
//  onClick={() => setOrder((prevState) => prevState === "desc" ? "asc" : "desc") }
// >
//  Change order
// </button>



<div onChange={onChangeValue} className="orderbuttons">
{sort_by === "created_at" ?<p> Order by Date</p>  :null}
{sort_by === "votes" ?<p> Order by Number of Votes</p>  :null}
{sort_by === "Comment_count" ?<p> Order by Number of Comments</p>  :null}
   
    <input type="radio" value="asc"
         name="sort" className="orderbutton1"
         /> Ascending
        <input type="radio" 
        value="desc" 
        name="sort"
        defaultChecked
        className="orderbutton2"
        /> descending
       
        </div>
 
    
    


   )
}



export default OrderButtons;