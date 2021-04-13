
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookUnit extends Component{

    static propTypes = {
        book: PropTypes.object,
        onChangeBookShelf: PropTypes.func.isRequired
    }
    render() {
        const { book,shelf,onChangeBookShelf} = this.props
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        {(book.imageLinks && book.imageLinks.smallThumbnail) && (
                            <div className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                }}>

                            </div>
                        )}
                        <div className="book-shelf-changer">
                            <select value={shelf === undefined?'none':shelf} onChange={(e) => onChangeBookShelf(e,book)}>
                                <option  value="move" disabled>Move to...</option>
                                <option  value="currentlyReading">Currently Reading</option>
                                <option  value="wantToRead">Want to Read</option>
                                <option  value="read">Read</option>
                                <option  value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{(book.authors && book.authors.length > 0) && (
                        book.authors.join('\n')
                    )}</div>
                </div>
            </li>
        )
    }
}
export default BookUnit;
