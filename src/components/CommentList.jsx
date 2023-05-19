import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsbyArticleId  } from "../utils/api";
import CommentCard from "./CommentCard";

import CommentsForm from "./CommentsForm";

const CommentList=()=> {
    const[isLoading, setIsLoading] =useState(true);
    const[commentsList, setCommentsList]= useState([]);
   
    const params = useParams();
    const articleId = params.article_id;


   

    useEffect(() => {
        setIsLoading(true);
       
        fetchCommentsbyArticleId(articleId).then((comments) => {
          setCommentsList(comments);
          
        setIsLoading(false);
        })
       

      }, [articleId]);
    
      if(isLoading ){
        return (
          <p>Is loading ....</p>
        )
      }

      
     

     
    
    return (
      <div>
        <CommentsForm   articleId={articleId} setCommentsList={setCommentsList} commentsList={commentsList}/> 

     
        <h2>  Here are all the comments about article {articleId}</h2>
       
   <p className="commentList">
       { commentsList.length === 0? <p>Sorry, there are no comments</p> : commentsList.map((comment)=> {  return ( 
                 <CommentCard   key = {comment.comment_id} comment={comment} setCommentsList={setCommentsList} />
                ) 
              
            })}
       </p>
      </div>
    )

}
export default CommentList;