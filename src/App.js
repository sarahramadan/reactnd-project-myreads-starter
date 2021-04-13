import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookCategory from './BookCategory'
class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route  path='/search' render={() => (
          <SearchBooks />
        )} />
        <Route exact path='/' render={() => (
          <BookCategory />
        )} />
      </div>
    )
  }
}

export default BooksApp
