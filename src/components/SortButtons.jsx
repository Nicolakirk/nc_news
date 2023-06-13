// import { useEffect } from "react"
// import { useState } from "react"
// import { useParams } from "react-router-dom";

import { Link } from "react-router-dom"


 

 const SortButtons =()=>{


 
       

    


    return ( 
        <div>
            <p> Sort the articles by ...</p>
            <nav className="Sortbuttons">
            <button className="button1">
<Link to ={`/articles/sort/${"comment_count"}`}> comment count</Link> 
    </button>
    <button className="button2">
<Link to ={`/articles/sort/${"votes"}`}> votes</Link>
   </button>
     <button className="button3">
<Link to ={`/articles/sort/${"created_at"}`}> Date</Link> 
    </button>

</nav>
 </div>


   )
}



export default SortButtons;