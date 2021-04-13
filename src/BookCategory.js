import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookUnit from './BookUnit'

class BookCategory extends Component{
    static propTypes = {
        books: PropTypes.array,
    }

    render() {
        const { books } = this.props
        let currentBooks = books.filter(a=> a.shelf === 'currentlyReading');
        let wantToReadBooks = books.filter(a=> a.shelf === 'wantToRead');
        let read = books.filter(a=> a.shelf === 'read');
        console.log('books',books)
        console.log('currentBooks',currentBooks)
        console.log('wantToReadBooks',wantToReadBooks)
        console.log('read',read)
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
                                    {currentBooks.map((book,index) => (
                                        <BookUnit key={index} book={book} />
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
                                        <BookUnit key={index} book={book} />
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
                                        <BookUnit key={index} book={book} />
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