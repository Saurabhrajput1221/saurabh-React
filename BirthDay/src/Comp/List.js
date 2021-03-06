import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <div className="person">
            <h1 key={id}> {id}</h1>
            <img src={image}  alt={image}/>
            <div className="name">
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;

