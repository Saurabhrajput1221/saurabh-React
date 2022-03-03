// import React from "./Componets/BestReact/BestReact";
// import ExpenceItem from "./Componets/ExpenseItem/ExpenseItem";
import Bootsrap from "./Bootstrap/Bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from "./Bootstrap/Card";


function App() {
  // let expenseDate = new Date(2022, 2, 28);
  // let expenseTitle = "Dinner";
  // let expenseAmount = 300;
  return (
    <div>
      {/* <h2> lets get started</h2> */}
      <Bootsrap/>
      <h1>Hello friends.....</h1>
      <Cards/>

      {/* <> */}
  
{/*     
      <ExpenceItem
        date={expenseDate}
        title={expenseTitle}
        amount={expenseAmount}
      ></ExpenceItem> */}
    </div>
  );
}

export default App;
