import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import BookList from './BookList'
import './App.css'
import PropTypes from 'prop-types';



class BookShelf extends React.Component {

  render() {
    return (
      <div>
      {this.props.categories.map((category) =>

       <div key={category.cat} className = "bookshelf">
          <h2 className="bookshelf-title">{category.title}</h2>
          <div className="bookshelf-books">
          <ol className = 'books-grid'>
            <BookList category={category.cat}   books={this.props.books} moveShelf ={this.props.moveShelf}/>
          </ol>
          </div>
        </div>


      )}
      </div>
    );
  }
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequried
};
export default BookShelf

