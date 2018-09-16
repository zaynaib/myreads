import React from 'react'
// import * as BooksAPI from './BooksAPI'
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
    categories:["Currently Reading","Want To Read","Read"],
    books:[
      {
        "title": "To Kill a Mockingbird",
        "authors": "Harper Lee",
        "bookURL": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        "bookShelf": "Currently Reading"
      },
      {
        "title": "Ender's Game",
        "authors": "Orson Scott Card",
        "bookURL": "https://prodimage.images-bn.com/pimages/9780765342294_p0_v1_s550x406.jpg",
        "bookShelf": "Currently Reading"
      },
      {
        "title": "1776",
        "authors": "David McCullough",
        "bookURL": "https://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72IDQf4E9sqlR1ny12k6MmxVoH6KMLGvYfx8p8x64Pl7YfQC_MUr4oIXPwc_YbaYKAXs5Cf0--E4uU4VZsAXk2UuiZLksvJP_2LrEkbcb62ch1GBw9VQXnJ4c72GJg9gTbbNGo5",
        "bookShelf": "Want To Read"
      },
      {
        "title": "Harry Potter and the Sorcerer's Stone",
        "authors": "J.K. Rowling",
        "bookURL": "https://books.google.com/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=5",
        "bookShelf": "Want to Read"
      },
      {
        "title": "The Hobbit",
        "authors": "J.R.R. Tolkien",
        "bookURL": "https://prodimage.images-bn.com/pimages/9780547928227_p0_v2_s550x406.jpg",
        "bookShelf": "Read"
      },
      {
        "title": "Oh, the Places You'll Go!",
        "authors": "Seuss",
        "bookURL": "https://books.google.com/books/content?id=FyiIcgAACAAJ&printsec=frontcover&img=1&zoom=5",
        "bookShelf": "Read"
      },
      {
        "title": "The Adventures of Tom Sawyer",
        "authors": "Mark Twain",
        "bookURL": "https://books.google.com/books/content?id=rpC-JauA-xwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70nFfZR58GHyaH0xRyqlZYbo6RHMcRWle30nIkZD7ldssj3thvgaPRl9DGXTKkovUcBOgqYx5cWu1qBd8lxSloJ0CLpw7Poul91N5D8ogsOZiir-SoomWAn5jOZBJqI3KteYv3O",
        "bookShelf": "Read"
      }
    ]
}
  render() {
    return (
      <div class="list-books">
        <Header/>
        <BookShelf  books ={this.state.books}/>
      </div>
    );
  }
}


export default BooksApp
