import React from "react";
import people from "./Data";


function List(){
    return(
        <>
        {people.map((person)=>{
            const { id, name, age, image, quote} = person;

            return(
                <>
                <h1>{id}</h1>
                <img src={image}/>
                <h4>{name}</h4>
                <p>{age} Years</p>
                <p>{quote}</p>
                </>
            )

        })}
        </>
    )
}
export default List;