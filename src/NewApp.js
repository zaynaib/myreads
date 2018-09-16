import React from 'react'
import * as BooksAPI from './BooksAPI'
import Header from './Header'
import BookList from './BookList'
import BookShelf from './BookShelf'

//https://stackoverflow.com/questions/45019420/react-load-all-data-from-json-into-component
//https://reactjs.org/tutorial/tutorial.html
//https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
//import BookInfo from './books-info.json'

import './App.css'

class BooksApp extends React.Component {
  state ={
    //piece of state to render UI it should live inside of a component
    //react should take care of the state of the data
    categories:["currentlyReading","wantToRead","read"],
    books:[]
}
componentDidMount(){
  BooksAPI.getAll().then((books) =>{
  this.setState({books:books})
  })
}

moveShelf  = (book,shelf) =>{
  //update the shelf property of the book
  BooksAPI.update(book,shelf);

}


  render() {
    return (
      <div className="list-books">
        <Header/>
        <BookShelf 
        categories={this.state.categories} 
         books ={this.state.books}
         moveShelf ={this.moveShelf}
         />
      </div>
    );
  }
}


export default BooksApp
