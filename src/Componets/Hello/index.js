import "./ExpenseItem.css";

function Expence(props) {
  // let month = props.date.toLocalString('en-US', {month: 'long'});
  // let Year = props.date.getFullYear();
  // let day =props.date.toLocalString('en-US',{month: '2-digit'});
  return (
    <div>
      <div>
        <div></div>
        {/* <div>{Year}</div>
          <div>{day}</div> */}
      </div>
      <div className="expense-Item__description">
        <h2>{props.title}</h2>
        <div className="expense-Item__price">$200</div>
      </div>
    </div>
  );
}

export default Expence;
