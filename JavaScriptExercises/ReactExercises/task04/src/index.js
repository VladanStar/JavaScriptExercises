import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"

// store cuva sve podatke koje se ticu aplikacije

// Akcije

const increment=()=>{
return{type:'INCREMENT'}
};
const decrement =()=>{
  return {type:'DECREMENT'}
};
// reducer
const counter = (state=0, action)=>{
  switch(action.type){
    case "INCREMENT": return state+1;
    case "DECREMENT": return state -1;
  }
};

let store = createStore(counter);

// prikaz
store.subscribe(()=>console.log(store.getState()));

//dispach koja akcija ce se izvrsiti

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
