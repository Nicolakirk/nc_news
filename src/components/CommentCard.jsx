import { useState } from "react"
import { useParams } from "react-router-dom";
import Deletebutton from "./Deletebutton";

const CommentCard = ({comment, setCommentsList}) =>{


 


return (

  <li  key = {comment.comment_id}         className="commentcard" >

    <h4>Created by {comment.author}</h4>
    <p>{comment.body}</p>
  
    <p>votes = {comment.votes}</p>
  <Deletebutton comment={comment} setCommentsList={setCommentsList} />
    <p></p>
  </li>
)

}

export default CommentCard;