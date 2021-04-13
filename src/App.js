import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookCategory from './BookCategory'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((res) => {
        this.setState(() => ({
          books: res
        }))
      })
  }
  render() {
    return (
      <div className="app">
        <Route  path='/search' render={() => (
          <SearchBooks />
        )} />
        <Route exact path='/' render={() => (
          <BookCategory books={this.state.books}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
