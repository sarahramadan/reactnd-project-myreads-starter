import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookUnit from './BookUnit'
import PropTypes from 'prop-types'

class BookCategory extends Component {
    static propTypes = {
        currentBooks: PropTypes.array,
        readBooks: PropTypes.array,
        wantToReadBooks: PropTypes.array,
        onChangeBookShelfCategory: PropTypes.func.isRequired
    }
    // emit event to parent controll to change book shelf
    changeBookShelf = (e,book) =>{
        this.props.onChangeBookShelfCategory(e,book);
    }
    render() {
        const {currentBooks,readBooks,wantToReadBooks} =this.props;
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
                                        shelf={book.shelf}
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
                                        shelf={book.shelf}
                                        onChangeBookShelf={this.changeBookShelf}
                                         />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                {readBooks.length === 0 && (
                                    <div className='showing-contacts'>
                                        <span>No books in this section</span>
                                    </div>
                                )}
                                <ol className="books-grid">
                                    {readBooks.map((book, index) => (
                                         <BookUnit key={index} 
                                         book={book}
                                         shelf={book.shelf}
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