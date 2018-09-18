import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

import './App.css'

class SearchPage extends React.Component{
  state = {
    categories:["currentlyReading","wantToRead","read"],
    query:'',
    searchedBooks:[]
  }
  


  updateQuery = (query) =>{
    this.setState({
      query:query
    })
    this.updateSearchedBooks(query);
  }

  updateSearchedBooks = (query) =>{
    //if someone preforms a query
    if(query){
      BooksAPI.search(query).then((searchedBooks)=>{
        //if a book cannot be found return empty array
        if(searchedBooks.error){
          this.setState({searchedBooks:[]})
        }else{
        //if book is found the return book
        this.setState({searchedBooks:searchedBooks})
        }
      })
    }
    //if there is not query in the search bar then give an empty array
    else{
      this.setState({searchedBooks:[]})
    }
    
  }
  render(){
    //console.log(this.state.searchedBooks.shelf = "none")
    //this.state.searchedBooks.map(searchedBook => { searchedBook.shelf='none'})
    console.log(this.state.searchedBooks)


    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link to="/"className="close-search"  >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" 
                  value={this.state.query} 
                  onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              <BookList books={this.state.searchedBooks} moveShelf ={this.props.moveShelf} />
              
              </ol>
            </div>
          </div>
    )
  }
}
export default SearchPage



//1:41