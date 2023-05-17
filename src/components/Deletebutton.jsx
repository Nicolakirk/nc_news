import { useState } from "react"
import { deleteComment } from "../utils/api";

const Deletebutton =({comment, setCommentsList })=>{
   
    const[message, setMessage]= useState("");
    const [err, setErr] =useState(null);
    const[submitting, setSubmitting]= useState(false);

    const handleClick= (event)=>{
    event.preventDefault();
    
    setCommentsList((currentComments)=>{
        return[...currentComments].filter((comments,key)=> comments.comment_id !== comment.comment_id)
    })
    setMessage("We have deleted your comment")
    setErr(null);
 
    deleteComment(comment.comment_id).catch((err)=>{
        console.log(err);
setErr("oops! something went wrong, please try agin")
    }

    )}
    return (
        <div>
           <button className="deletebutton" onClick={handleClick}>  Delete</button>   
           {err ? <h4>{err}</h4> : null}
        </div>
    )

}

export default  Deletebutton;