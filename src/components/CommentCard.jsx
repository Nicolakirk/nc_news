
const CommentCard = ({comment}) =>{

return (
  <li  className="commentcard" >

    <h4>Created by {comment.author}</h4>
    <p>{comment.body}</p>
    <p>votes = {comment.votes}</p>
    <p></p>
  </li>
)

}

export default CommentCard;