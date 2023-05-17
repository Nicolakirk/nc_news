// import { useEffect } from "react"
// import { useState } from "react"
// import { useParams } from "react-router-dom";

import { Link } from "react-router-dom"

// import {  getArticles, sortArticles } from "../utils/api"
 

 const SortButtons =()=>{
//     const { sort_by }=useParams();
 
//     console.log(sort_by);
//     const[sort, setSort]= useState("")
//    const[error, setError]= useState(false);
//     const[isLoading, setisLoading]=useState(true)

//     useEffect(()=>{
//        setisLoading(true);
//         setError(false);
//       sortArticles(sort)
     
//        .then((articles)=>{
//         setArticlesList(articles);
//         console.log(articlesList)
//        })
//         .catch((err)=>{
//             console.log(err);
//         });
       
//     },[ sort]);

 
       


{/*             
 {/* <button onClick={()=> setSort("comment_count")} >Sort By Commment Count </button>
 <button onClick={()=> setSort("votes")}> Sort By Votes </button> */}

    return ( 
        <div>
            <nav>
            <button>
<Link to ={`/articles/sort/${"comment_count"}`}> comment count</Link> 
    </button>
    <button>
<Link to ={`/articles/sort/${"votes"}`}> votes</Link>
   </button>
     <button>
<Link to ={`/articles/sort/${"created_at"}`}> created_at</Link> 
    </button>

</nav>
 </div>


   )
}



export default SortButtons;