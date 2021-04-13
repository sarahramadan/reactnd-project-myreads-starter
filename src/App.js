import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookCategory from './BookCategory'
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {
  state={
    books: [],
    currentBooks:[],
    readBooks:[],
    wantToReadBooks: []
  }
  componentDidMount() {
    this.getAll();
  }
  // send request to get all books
  getAll = () => {
    BooksAPI.getAll()
      .then((res) => {
        this.setState(() => ({
          books: res,
          currentBooks: res.filter(a => a.shelf === 'currentlyReading'),
          wantToReadBooks: res.filter(a => a.shelf === 'wantToRead'),
          readBooks: res.filter(a => a.shelf === 'read')
        }))
      })
  }
  // update book shelf request and get latest list
  changeBookShelfCategory = (e, book) => {
    BooksAPI.update(book, e.target.value).then(res => {
      this.getAll();
    })
  }
  render() {
    return (
      <div className="app">
        <Route  path='/search' render={() => (
          <SearchBooks
          books={this.state.books}
          onChangeBookShelfCategory={this.changeBookShelfCategory} />
        )} />
        <Route exact path='/' render={() => (
          <BookCategory
          books={this.state.books}
          currentBooks={this.state.currentBooks} 
          readBooks={this.state.readBooks}
          wantToReadBooks={this.state.wantToReadBooks} 
          onChangeBookShelfCategory={this.changeBookShelfCategory}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
