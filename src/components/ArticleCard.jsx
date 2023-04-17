

const ArticleCard =({article})=>{
   

   return (
    <li  className="articlecard" key = {article.article_id}> <img src={article.article_img_url}  alt={article.article_title}
    width={300}
    height={250}>
    </img>
   <h4>{article.topic}</h4>
    <h3 > {article.title} by {article.author}
    
    </h3>
    </li>
          
   );

};

export default ArticleCard;