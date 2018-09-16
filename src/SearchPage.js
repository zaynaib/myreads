import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import './App.css'

class SearchPage extends React.Component{
  state = {
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
    if(query){
      BooksAPI.search(query).then((searchedBooks)=>{
        this.setState({searchedBooks:searchedBooks})
      })

    }
    else{
      this.setState({searchedBooks:[]})
    }
    
  }
  render(){
 
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" >Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" 
                  value={this.state.query} 
                  onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchedBooks.map(searchedBook => (
                <li key={searchedBook.id}>
                  <BookList mybooks ={searchedBook}/>

                </li>
              ))}
              
              </ol>
            </div>
          </div>
    )
  }
}
export default SearchPage



//1:41