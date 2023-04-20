
import './App.css';
import ArticlesList from './components/ArticlesList';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import SingleCardView from './components/SingleCardView';




function App() {

  const[articlesList,setArticlesList] = useState([]);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = '/' element = { <ArticlesList articlesList={articlesList} setArticlesList={setArticlesList}/> } />
        <Route path = '/articles' element = { <ArticlesList articlesList={articlesList} setArticlesList={setArticlesList}/>} />
        <Route path='/articles/:article_id' element={<SingleCardView />} />
       
        </Routes>
    </div>
  );
}

export default App;
