import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookUnit from './BookUnit'
import * as BooksAPI from './BooksAPI'

class BookCategory extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        this.getAll();
    }
    getAll = ()=>{
        BooksAPI.getAll()
        .then((res) => {
            this.setState(() => ({
                books: res
            }))
        })
    }
    changeBookShelf = (e,book) =>{
        BooksAPI.update(book,e.target.value).then(res=>{
            this.getAll();
        })
    }
    render() {
        let currentBooks = this.state.books.filter(a => a.shelf === 'currentlyReading');
        let wantToReadBooks = this.state.books.filter(a => a.shelf === 'wantToRead');
        let read = this.state.books.filter(a => a.shelf === 'read');
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                {currentBooks.length === 0 && (
                                    <div className='showing-contacts'>
                                        <span>No books in this section</span>
                                    </div>
                                )}
                                <ol className="books-grid">
                                    {currentBooks.map((book, index) => (
                                        <BookUnit key={index} 
                                        book={book}
                                        onChangeBookShelf={this.changeBookShelf} />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                {wantToReadBooks.length === 0 && (
                                    <div className='showing-contacts'>
                                        <span>No books in this section</span>
                                    </div>
                                )}
                                <ol className="books-grid">
                                    {wantToReadBooks.map((book, index) => (
                                        <BookUnit key={index} 
                                        book={book}
                                        onChangeBookShelf={this.changeBookShelf}
                                         />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                {read.length === 0 && (
                                    <div className='showing-contacts'>
                                        <span>No books in this section</span>
                                    </div>
                                )}
                                <ol className="books-grid">
                                    {read.map((book, index) => (
                                         <BookUnit key={index} 
                                         book={book}
                                         onChangeBookShelf={this.changeBookShelf}
                                          />
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}
export default BookCategory