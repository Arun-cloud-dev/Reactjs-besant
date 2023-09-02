import React from "react";
import Book from "./Book";

function BookList() {
    
    const book = [
        { title: 'Book 1', author: 'Author 1' },
        { title: 'Book 1', author: 'Author 1' },
        { title: 'Book 1', author: 'Author 1' },        
    ];
    return (
        <div className="book-list">
            <h1>Book List</h1>
            {book.map((book, index) =>
                < Book key={index} title={book.title}
                    author={book.author } />
            )}

        </div>
    )

}

export default BookList;