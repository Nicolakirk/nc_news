import axios from "axios";

const newsApi = axios.create({ 
    baseURL : 'https://nc-news-h4q7.onrender.com/api'
    
})


export const fetchArticles =  ()=>{
    return newsApi.get('/articles').then((response)=> {
      
    return response.data.articles
    
    })
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
    