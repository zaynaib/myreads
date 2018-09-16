import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import BookList from './BookList'
import './App.css'


class BookShelf extends React.Component {
  render() {
    return (
      <div>
      {this.props.categories.map((category) =>

       <div key={category} className = "bookshelf">
          <h2 className="bookshelf-title">{category}</h2>
          <div className="bookshelf-books">
            <BookList category={category} books={this.props.books} />
          </div>
        </div>


      )}
      </div>
    );
  }
}

export default BookShelf

