import React, {Component} from 'react'
import './books-info.json'
import BookChanger from './BookChanger'
import './App.css'

//https://reactjs.org/docs/conditional-rendering.html ***
//https://react-cn.github.io/react/tips/if-else-in-JSX.html
//https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e



class BookList extends React.Component{
    //instead of getting the props from an instance we get it from the argument of the function
    render(){
    let category =this.props.category;
    let mybooks = this.props.books;
    return(
     
    mybooks.map(book =>  { 
        if(book.bookShelf === category){
            return(<li key={book.name}>
            <div className = "book">
                <div className="book-top">
                    <div className ="book-cover" style={{backgroundImage:`url(${book.bookURL})`}}></div>
                    <BookChanger/>
                </div>
                <div className="book-title">{`${book.title}`}</div>
                <div className="book-authors">{`${book.authors}`}</div>

            </div>
        </li>)

        }
        })//end of map
    )//end of render

    }
}

export default BookList




