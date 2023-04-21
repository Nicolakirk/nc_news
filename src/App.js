
import './App.css';
import ArticlesList from './components/ArticlesList';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import SingleCardView from './components/SingleCardView';
import TopicsList from './components/TopicsList';




function App() {

  const[articlesList,setArticlesList] = useState([]);
  const[topicsListView, setTopicsListView]= useState([]);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = '/' element = { <ArticlesList articlesList={articlesList} setArticlesList={setArticlesList} topicsListView={topicsListView}    setTopicsListView={setTopicsListView}/> } />
        <Route path = '/articles' element = { <ArticlesList articlesList={articlesList} setArticlesList={setArticlesList} topicsListView={topicsListView}    setTopicsListView={setTopicsListView}/>} />
        <Route path='/articles/:article_id' element={<SingleCardView />} />
       <Route path='/articles/topics/:topic' element= { <TopicsList articlesList={articlesList} setArticlesList={setArticlesList} topicsListView={topicsListView}    setTopicsListView={setTopicsListView}/>} />
        </Routes>
    </div>
  );
}

export default App;
