
import './App.css';
import ArticlesList from './components/ArticlesList';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import SingleCardView from './components/SingleCardView';
import TopicsList from './components/TopicsList';
import SortList from './components/SortList';




function App() {

  const[articlesList,setArticlesList] = useState([]);
  const[topicsListView, setTopicsListView]= useState([]);
  return (
    <div className="App">
      <Header topicsListView={topicsListView}    setTopicsListView={setTopicsListView}/>
      <Routes>
        <Route path = '/' element = { <ArticlesList articlesList={articlesList} setArticlesList={setArticlesList} topicsListView={topicsListView}    setTopicsListView={setTopicsListView}/> } />
        <Route path = '/articles' element = { <ArticlesList articlesList={articlesList} setArticlesList={setArticlesList} topicsListView={topicsListView}    setTopicsListView={setTopicsListView}/>} />
        <Route path='/articles/:article_id' element={<SingleCardView />} />
       <Route path='/articles/topics/:topic' element= { <TopicsList articlesList={articlesList} setArticlesList={setArticlesList} topicsListView={topicsListView}    setTopicsListView={setTopicsListView}/>} />
       <Route path ='/articles/sort/:sort_by' element={ <SortList articlesList={articlesList} setArticlesList={setArticlesList}  />}/>
        </Routes>
    </div>
  );
}

export default App;
