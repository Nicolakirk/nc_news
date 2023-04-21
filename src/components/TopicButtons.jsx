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
        <nav>
            <ul>{topicsListView.map((topic)=> <li key={topic.slug} >
            <Link to={`/articles/topics/${topic.slug}`}>{topic.slug} </Link>
          
            </li>)}

            </ul>
        </nav>)

    }


    export default TopicButtons;