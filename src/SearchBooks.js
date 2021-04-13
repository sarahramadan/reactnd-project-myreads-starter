import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookUnit from './BookUnit'

class SearchBooks extends Component {
    state = {
        query: '',
        books: []
    }
    filterQuery = (query) => {
        console.log('filterQuery', query)
        this.setState(() => ({
            query: query
        }))
        this.setState(() => ({
            books: []
        }));
        this.serachRequest();
    }
    serachRequest() {
        BooksAPI.search(this.state.query).then(res => {
            if (res && !res.error) {
                console.log('search', res);
                this.setState(() => ({
                    books: res
                }))
            } else {
                this.setState(() => ({
                    books: []
                })); 
            }

        })
            .catch((error) => {
                this.setState(() => ({
                    books: []
                })); 
                console.error('Error:', error);
            }
            )
    }
    changeBookShelf = (e, book) => {
        BooksAPI.update(book, e.target.value).then(res => {
         this.serachRequest();
        })
    }

    render() {
        const { query, books } = this.state
        const showingResults = query === "" ? false : true
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query}
                            onChange={(event) => this.filterQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    {showingResults === false && (
                        <div className='showing-contacts'>
                            <span>Type to start search</span>
                        </div>
                    )}
                    {(books.length === 0 && showingResults) && (
                        <div className='showing-contacts'>
                            <span>No books match search criteria </span>
                        </div>
                    )}
                    <ol className="books-grid">
                        {(showingResults && books.length > 0) && (books.map((book, index) => (
                            <BookUnit key={index}
                                book={book}
                                onChangeBookShelf={this.changeBookShelf} />
                        )))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchBooks