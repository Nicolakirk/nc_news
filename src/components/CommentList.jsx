import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsbyArticleId } from "../utils/api";
import CommentCard from "./CommentCard";

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
       

      }, []);
      if(isLoading ){
        return (
          <p>Is loading ....</p>
        )
      }
    
    return (
      <div>
        
        <h2>  Here are all the comments about article {articleId}</h2>
        <ul className="commentsboxes">
            {commentsList.map((comment)=> {
              if (!comment) <p> Sorry there are no comments. </p>
              else {
                return ( 
                 <CommentCard key = {comment.comment_id}    comment={comment}/>
                ) 
              }
            })}
        </ul>
      </div>
    )

}
export default CommentList;