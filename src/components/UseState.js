import React , {useState} from "react";
const MyState = () => {
 const [ Hello , ChangeTile] = useState('change me...')
 console.log(Hello)
 const Change=(e) => {
     ChangeTile(e.target.value)
 }


  return (
    <>
    <h1>Change Someting</h1>
    <h2>{Hello}</h2>

    <input onChange={Change} />
    </>
  
  );
};
export default MyState;
