import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Componets/Calculator';
import "./index.css";
// import reportWebVitals from './reportWebVitals';
 
function App(){
return(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default App