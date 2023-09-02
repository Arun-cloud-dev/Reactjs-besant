import React from "react";

function Book(prop) {
    return (
        <div className="book">
            <h2>{prop.title}</h2>
            <p> Author : { prop.author}</p>
        </div>
    )
}

export default Book;