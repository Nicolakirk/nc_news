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
    