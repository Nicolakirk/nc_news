import { useEffect } from "react"
import { useState } from "react"

import { Link } from "react-router-dom"
import { fetchTopics } from "../utils/api"

const Header =({setTopicsListView, topicsListView})=>{
    const[isLoading, setIsLoading] =useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  

    useEffect(()=>{
       
        fetchTopics().then((topics)=>{
            setTopicsListView(topics)
            
            console.log("topi",topicsListView);
        })
    },[])
   
    
     
  return (
    <div className="nav">
        <div className="dropdown">
            <button className="dropbtn">
                <Link to ={`/`}>Home</Link>
            </button>
        </div>
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        Topics
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {topicsListView.map((topic) => (
            <div key={topic.slug}>
              <Link to={`/articles/topics/${topic.slug}`}>{topic.slug}</Link>
            </div>
          ))}
        </div>
      )}

      
    </div>

    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        Sort By:
      </button>
      {isOpen && (
        <div className="dropdown-content">
          
            <div >
              <Link to={`/articles/sort/${"comment_count"}`}> comment count</Link>
            </div>
            <div> <Link to ={`/articles/sort/${"votes"}`}> votes</Link></div>
         <div>
         <Link to ={`/articles/sort/${"created_at"}`}> Date</Link> 
         </div>
        </div>
      )}

      
    </div>



    </div>
    
  );
};
    
    

export default Header;








