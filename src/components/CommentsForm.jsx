import {  useState } from "react";
import { useParams } from "react-router-dom";
import { postComments } from "../utils/api";



const CommentsForm =({commentsList, setCommentsList,})=>{
const params =useParams();

const articleId = params.article_id;

const[userName, setUserName]=useState('tickle122')
const[submitting, setSubmitting]= useState(false);
const[body, setBody]=useState("")
const [err, setErr] =useState(null);

const[message, setMessage]= useState("");



const handleSubmit =(event)=>{
    event.preventDefault();
  

            const inputComment = {
            
            username: userName,
                body: body,
                votes:0,
                    };
              
           setCommentsList((currentComments)=> {
                    return ([inputComment, ...currentComments])})
                    setMessage("We have updated your comment");
                     setErr(null)
                     setSubmitting(true);
        postComments(articleId, inputComment).catch((err) => {
        if(body === ""){
        setMessage("Please enter a comment")}
        else{
            setCommentsList((currentComments) => { 
          return  [...currentComments]}).then((copyArray)=>{
          copyArray.shift();
          })
            setErr("Something went wrong!, please try again!");
                                ;
                      }
              })
              setBody("")
              setSubmitting(false);
                   
               
                };

return (
       <div className="commentsform" >  <form
            
            onSubmit={handleSubmit}> 
            <h3 className="grid_item1" >Post a New Comment Here</h3>
          
              <textarea className="grid_item2"
           
              value={body}
              maxLength="1000"
              required
              disabled={submitting}
              onChange={(event)=> setBody(event.target.value)}
              />


 <div className="grid_item3">

 
<button className="button" type="submit">
            + Comment!
        
           
        </button>

        </div>
        
        
        <div className="grid_item3">
        {err ? <p>{err}</p> :null}
        {!err ? <p>{message}</p> :null}
    
        </div>
     
    </form>
    
   
    </div>
  
  )
}



export default CommentsForm;




