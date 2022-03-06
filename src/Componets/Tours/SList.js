import React from "react";
import people from "./Data";


function List(){
    return(
        <>
        {people.map((person)=>{
            const { id, name, age, image} = person;

            return(
                <>
                <h1>{id}</h1>
                <img src={image}/>
                <h4>{name}</h4>
                <p>{age} Years</p>
                </>
            )

        })}
        </>
    )
}
export default List;