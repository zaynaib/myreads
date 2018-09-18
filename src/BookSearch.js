import React from 'react';
//import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

import './App.css'


class BookSearch extends React.Component {
    render() {
      return (
        <div className="open-search">
              <Link to="/search">Add a book</Link>
        </div>
      );
    }
  }

export default BookSearch
