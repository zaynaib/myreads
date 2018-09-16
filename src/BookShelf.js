import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import BookList from './BookList'
import './App.css'


class BookShelf extends React.Component {
  render() {
    return (
      <div className = "bookshelf">
       <h2 className="bookshelf-title">Title</h2>
        <div className="bookshelf-books">
          <BookList books={this.props.books} />
          
        </div>

      </div>
    );
  }
}

export default BookShelf

