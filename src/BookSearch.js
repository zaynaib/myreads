import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import './App.css'


class BookSearch extends React.Component {
    render() {
      return (
        <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      );
    }
  }

export default BookSearch
