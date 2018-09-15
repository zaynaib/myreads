import React from 'react'
// import * as BooksAPI from './BooksAPI'
import Header from './Header'
import BookList from './BookList'
//https://stackoverflow.com/questions/45019420/react-load-all-data-from-json-into-component
//import BookInfo from './books-info.json'

import './App.css'

class BooksApp extends React.Component {
  state ={
    //piece of state to render UI it should live inside of a component
    //react should take care of the state of the data
    books:[
        {
          "id": "ryan",
          "name": "Ryan Florence",
          "email": "ryan@reacttraining.com",
          "avatarURL": "http://localhost:5001/ryan.jpg"
        },
        {
          "id": "michael",
          "name": "Michael Jackson",
          "email": "michael@reacttraining.com",
          "avatarURL": "http://localhost:5001/michael.jpg"
        },
        {
          "id": "tyler",
          "name": "Tyler McGinnis",
          "email": "tyler@reacttraining.com",
          "avatarURL": "http://localhost:5001/tyler.jpg"
        }
    ]
}
  render() {
    return (
      <div>
      <Header/>
      <BookList  books ={this.state.books}/>
      </div>
    );
  }
}


export default BooksApp
