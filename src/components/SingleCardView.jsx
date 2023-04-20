import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById, patchArticle } from "../utils/api";


import CommentList from "./CommentList";



const SingleCardView=({  })=>{

    const [isLoading, setIsLoading] = useState(true);
    const[singleCard, setSingleCard] =useState({});
    const [err, setErr] =useState('');
    const params = useParams();
    const articleId = params.article_id;
   
    const[addVote, setAddedVotes]=useState(0);
    
    const HandleClick=()=>{
  
    setAddedVotes((currentVote)=> currentVote +1)
    setErr(null);
   patchArticle(articleId).catch((err)=>{
   setAddedVotes((currentVote)=> currentVote -1)
   setErr('Something went wrong, try again later')
  })
    }
   

  
    console.log(articleId);
  
 
    useEffect(() => {
        setIsLoading(true);
        fetchArticlesById(articleId).then((article) => {
          setSingleCard(article);
        setIsLoading(false);
        });
      }, [articleId]);
    
      if (isLoading) {
        return <p></p>;
      }
    
    
   return (
<div>
<ul>
<h2>{singleCard.title} </h2>
<h2>{singleCard.author}</h2>
<img src={singleCard.article_img_url}  alt={singleCard.title}
    width={400}
    height={350}>
    </img>
<p> {singleCard.body} </p>

<h3>  {singleCard.title} has { singleCard.votes + addVote } votes

 </h3>
{err ? <p>{err}</p> :null}
    <button  className="votebutton" onClick={HandleClick}>Vote for this article</button>
  
</ul>
<div>
  
</div>

<CommentList/>
</div>

    )

}
export default SingleCardView;