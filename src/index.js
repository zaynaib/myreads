import React from 'react'
import ReactDOM from 'react-dom'
import NewApp from './NewApp'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

ReactDOM.render(<BrowserRouter><NewApp /></BrowserRouter>, document.getElementById('root'))
