import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById, patchArticle } from "../utils/api";

import CommentList from "./CommentList";

const SingleCardView=({  article, articlesList,setArticlesList})=>{

    const [isLoading, setIsLoading] = useState(true);
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
   

  
    
  
 
    useEffect(() => {
        setIsLoading(true);
        fetchArticlesById(articleId).then((article) => {
          setArticlesList(article);
        setIsLoading(false);
        });
      }, []);
    
      if (isLoading) {
        return <p></p>;
      }
    
    
   return (
<div>
<ul>
<h2>{articlesList.title} </h2>
<h2>{articlesList.author}</h2>
<img src={articlesList.article_img_url}  alt={articlesList.article_title}
    width={400}
    height={350}>
    </img>
<p> {articlesList.body} </p>

<p> 💛 Article Votes:  { articlesList.votes + addVote }

💛 </p>
{err ? <p>{err}</p> :null}
    <button onClick={HandleClick}>Vote for this article</button>
  
</ul>
<CommentList/>
</div>

    )

}
export default SingleCardView;