import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import './App.css'
//1:13

class BookChanger extends React.Component {
  state ={
    value :'tweet'
  }

 
    render() {

      return (
        <div className="book-shelf-changer">
        <select value={this.state.value} onChange={() =>this.props.moveShelf(this.props.book)}>
            <option disabled="" value="move">Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
        
        </div>
      );
    }
  }

export default BookChanger
