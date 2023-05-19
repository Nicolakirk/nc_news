import axios from "axios";


const newsApi = axios.create({ 
    baseURL : 'https://nc-news-h4q7.onrender.com/api'
    
})


export const fetchArticles =  async ()=>{
    const response = await newsApi.get('/articles');
return response.data.articles;
    }

    export const fetchArticlesById = (articleId) => {
    return newsApi.get(`/articles/${articleId}`).then((response) =>{
             
   return response.data.article
        })
    }

    export const fetchCommentsbyArticleId = (articleId)=> {
        return newsApi.get(`/articles/${articleId}/comments`).then ((response) =>{
           
         return response.data.comments
        })
    }

    export const patchArticle =(articleId) =>{
        return newsApi.patch(`/articles/${articleId}`, { inc_votes: 1 })
        
        
        };

        export const postComments = (articleId, inputComment) => {
           
        return newsApi.post(`/articles/${articleId}/comments`, inputComment)
           .then((response) => {
                
         return response.data.comments;
                });
        };
    
        export const fetchTopics = () => {
            return  newsApi.get(`/topics`).then(({data})=>{
               
                return data.topics
            })
        }

        export const fetchTopicArticles = (topic) => {
            return newsApi.get(`/articles/?topic=${topic}`).then((response) =>{
          
             
                return response.data.articles;
            })
        }

        export const orderArticles=(order) =>{
            return newsApi.get(`/articles/?order=${order}`).then((response)=>{
                return response.data.articles
            })
        }


        export const sortArticles=( sort_by)=>{
            console.log(sort_by)
          
          
        return newsApi.get(`/articles/?sort_by=${sort_by}`).then((response)=>{
            
           return response.data.articles
            })
        }

        export const getArticles= (sort_by="created_at", order)=>{
         
            return newsApi.get(`/articles/?sort_by=${sort_by}&&order=${order}`).then(({data})=> {
                console.log(data.articles)
                return data.articles
            })
        };

        export const deleteComment=(comment_id)=>{ console.log(comment_id);
            return newsApi.delete(`/comments/${comment_id}`).then((response)=>{
            return response.data.articles
        })

        }
        