import React, {Component} from 'react'
import BookChanger from './BookChanger'
import './App.css'
import PropTypes from 'prop-types';


//https://reactjs.org/docs/conditional-rendering.html ***
//https://react-cn.github.io/react/tips/if-else-in-JSX.html
//https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e



class BookList extends React.Component{
    //instead of getting the props from an instance we get it from the argument of the function
    render(){
    let category =this.props.category;
    let mybooks = this.props.books;
    console.log('book list items')
    //console.log(mybooks)
    console.log(mybooks[0])
    
    return(
    
    mybooks.map(book =>  { 
        if(book.shelf === category){
            return(<li key={book.id}>
            <div className = "book">
                <div className="book-top">
                    <div className ="book-cover" style={{backgroundImage:
                        `url(${ book.imageLinks ? book.imageLinks.smallThumbnail:''})`}}>
                        
                        
                        </div>
                    <BookChanger moveShelf ={this.props.moveShelf} book={book}/>
                </div>
                <div className="book-title">{`${book.title}`}</div>
                <div className="book-authors">{`${book.authors}`}</div>

            </div>
        </li>)

        }

        else{
            return(
                <div></div>
            )
             
          
        }
        })//end of map
    )//end of render

    }
}

BookList.propTypes = {
    books: PropTypes.array.isRequried
  };

export default BookList




