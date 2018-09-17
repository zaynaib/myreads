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
    if(query){
      BooksAPI.search(query).then((searchedBooks)=>{
        if(searchedBooks.error){
          this.setState({searchedBooks:[]})
        }else{
        this.setState({searchedBooks:searchedBooks})
        }
      })
    }
    else{
      this.setState({searchedBooks:[]})
    }
    
  }
  render(){
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