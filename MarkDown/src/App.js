// import React,{useState,useEffect} from "react";
// import ReactMarkdown from "react-markdown";
// import './App.css';

// function App(){

//   const [markdown,setMarkdown] = useState("Write Something...")
//   const [loading,setLoading] = useState(true)

//   const handleChange = (e) =>{
//     setMarkdown(e.target.value)

//   }

//   const changeLoadingVar = () => {
//     setLoading(false)
//   }

//   useEffect(() => {
//     setTimeout(changeLoadingVar,2000)
//   },[]);

//     if(loading){
//       return (<h1>Loading...</h1>)
//     }

//     return(
//       <div className="app">
//         <textarea onChange={handleChange}/>
//         <ReactMarkdown className="preview" children={markdown}/>
//       </div>
//     )
// }

// export default App;
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [Abc, MarkDownHandle] = useState("");
  // const [Xyz, ChangeLoading] = useState(false);

  const Change = (e) => {
    MarkDownHandle(e.target.value);
  };

  // useEffect(()=>{
  //   setTimeout(ChangeLoading,2000)
  // },[]  )
  // console.log(Change);
  // const Loading=()=>{
  //   ChangeLoading(true)
  // }
  return (
    <Container>   
      <div className="App">
        <textarea onChange={Change} />
        <ReactMarkdown className="preview" children={Abc} />
      </div>
      </Container> 
  );
}

export default App;
