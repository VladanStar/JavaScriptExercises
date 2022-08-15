import React from 'react';
import './App.css';

function App() {

  const title = "Blog Post";
  const body = "This is my blog post";
  const comments =[
    {id:1, text:"Comment One"},
    {id:2,text:"Comment Two"},
    {id:3,text:"Comment Three"}
  ]

  const loading = false;
  const showComments = true;
  const commentBlock = (<div className="commnet">
  <h3>Comments ({comments.length})</h3>
  <ul>
    {comments.map((comment, id)=>(
      <li> key= {id}{comment.text}</li>
    ))}
  </ul>
</div>)

  if(loading) return <h1>Loading...</h1>
  return (
    <div className="App">
   
      <h1>Vladan Cupric</h1>
      <h2>{title.toUpperCase()}</h2>
      <p>{body}</p>
      {showComments && commentBlock}
      {Math.random}
      
    
    </div>
  );
}

export default App;
