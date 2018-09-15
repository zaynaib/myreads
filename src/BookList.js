import React, {Component} from 'react'
import './books-info.json'

import BookChanger from './BookChanger'
import './App.css'

function BookList(props){
    //instead of getting the props from an instance we get it from the argument of the function
    return(
        <ol className = 'books-grid'>
        {props.books.map((book)=> (
        <li key={book.name}>
            <div className = "book">
                <div className="book-top">
                    <div className ="book-cover" style={{backgroundImage:`url(${book.bookURL})`}}></div>
                    <BookChanger/>
                </div>
                <div class="book-title">{`${book.title}`}</div>
                <div class="book-authors">{`${book.authors}`}</div>

            </div>
        </li>
            
        ))}

        </ol>
    )

}

export default BookList




