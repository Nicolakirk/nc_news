import { useEffect } from "react"
import { useState } from "react"

import { Link } from "react-router-dom"
import { fetchTopics } from "../utils/api"



    const TopicButtons =({setTopicsListView, topicsListView})=>{

        const[isLoading, setIsLoading] =useState(true)

        useEffect(()=>{
            setIsLoading(true);
            fetchTopics().then((topics)=>{
                setTopicsListView(topics)
                setIsLoading(false);
            })
        },[])
        if(isLoading){
            return "loading..."
        }

        return (
          <div>
            <p>Read articles by topic</p>
    
            <p className="topicbuttons">{topicsListView.map((topic)=> <button  className="individualtopicbuttons" key={topic.slug} >
            <Link to={`/articles/topics/${topic.slug}`}>{topic.slug} </Link>
          
            </button>)}

            </p>
       
        </div>
        )

    }


    export default TopicButtons;