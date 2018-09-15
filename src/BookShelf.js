import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import BookList from './BookList'
import './App.css'


class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className='bookshelf-title'>{this.props.books.bookShelf}</h2>
        <div className='bookshelf-books'>
          <BookList/>
        </div>
        
        
      </div>
    );
  }
}

export default BookShelf

