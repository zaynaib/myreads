import React, {Component} from 'react'
import './books-info.json'
import BookChanger from './BookChanger'
import './App.css'

//https://reactjs.org/docs/conditional-rendering.html ***
//https://react-cn.github.io/react/tips/if-else-in-JSX.html
//https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e

/*
class BookList extends React.Component{
    render(){
        return(
            <ol className = 'books-grid'>
            {this.props.books.map((book)=> (
                
            <li key={book.name}>
                <div className = "book">
                    <div className="book-top">
                        <div className ="book-cover" style={{backgroundImage:`url(${book.bookURL})`}}></div>
                        <BookChanger/>
                    </div>
                    <div className="book-title">{`${book.title}`}</div>
                    <div className="book-authors">{`${book.authors}`}</div>
    
                </div>
            </li>
                
            ))}
    
            </ol>
        )

    }
}
*/


function BookList(props){
    //instead of getting the props from an instance we get it from the argument of the function
    
    let category = props.category;
    let mybooks = props.books;
    //console.log(mybooks[0])
    //const map1 = array1.map(x => x * 2);
    return(
    mybooks.map(book => {
        //console.log(book.bookShelf ===category)
        if(book.bookShelf === category){
            <li key={book.name}>
            <div className = "book">
                <div className="book-top">
                    <div className ="book-cover" style={{backgroundImage:`url(${book.bookURL})`}}></div>
                    <BookChanger/>
                </div>
                <div className="book-title">{`${book.title}`}</div>
                <div className="book-authors">{`${book.authors}`}</div>

            </div>
        </li>

        }
    })
    )
    
    
/*
    return(
    

        <ol className = 'books-grid'>
        
        {props.books.map((book)=> (
            
        <li key={book.name}>
            <div className = "book">
                <div className="book-top">
                    <div className ="book-cover" style={{backgroundImage:`url(${book.bookURL})`}}></div>
                    <BookChanger/>
                </div>
                <div className="book-title">{`${book.title}`}</div>
                <div className="book-authors">{`${book.authors}`}</div>

            </div>
        </li>
            
        ))}

        </ol>
    )
*/
}

export default BookList




