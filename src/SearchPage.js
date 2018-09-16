import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import './App.css'

class SearchPage extends React.Component{
  state = {
    query =''
  }
  render(){
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" >Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
    )
  }
}
export default SearchPage



//1:41