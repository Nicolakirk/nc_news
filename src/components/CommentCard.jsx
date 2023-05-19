import { useState } from "react"
import { useParams } from "react-router-dom";
import Deletebutton from "./Deletebutton";

const CommentCard = ({comment, setCommentsList}) =>{


 


return (

  <div  className="individualcommentcard" key = {comment.comment_id}   >

    <h3>Created by {comment.author}</h3>
    <p>{comment.body}</p>
  {/* <p>votes = {comment.votes}</p> */}
  <Deletebutton comment={comment} setCommentsList={setCommentsList} /> 
   
  </div>
   
)

}

export default CommentCard;