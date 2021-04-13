import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookUnit from './BookUnit'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array,
        onChangeBookShelfCategory: PropTypes.func.isRequired
    }
    state = {
        query: '',
        results: []
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
    //send search request
    serachRequest() {
        BooksAPI.search(this.state.query).then(res => {
            if (res && !res.error) {
                console.log('search', res);
                this.setState(() => ({
                    results: res
                }))
            } else {
                this.setState(() => ({
                    results: []
                })); 
            }

        })
            .catch((error) => {
                this.setState(() => ({
                    results: []
                })); 
                console.error('Error:', error);
            }
            )
    }
    // change book shelf 
    changeBookShelf = (e, book) => {
        this.props.onChangeBookShelfCategory(e,book);
    }
    // get book shelf name from main page book list
    getBookShelfName = (book)=>{
        let bookObj =this.props.books.filter(a=> a.id === book.id)[0];
        if(bookObj && bookObj.shelf){
            return bookObj.shelf
        }
        return 'none'
    }
    render() {
        const { query, results } = this.state
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
                    {(results.length === 0 && showingResults) && (
                        <div className='showing-contacts'>
                            <span>No books match search criteria </span>
                        </div>
                    )}
                    <ol className="books-grid">
                        {(showingResults && results.length > 0) && (results.map((book, index) => (
                            <BookUnit key={index}
                                book={book}
                                shelf={this.getBookShelfName(book)}
                                onChangeBookShelf={this.changeBookShelf} />
                        )))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchBooks