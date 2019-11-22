import React from "react";

import SavedBook from "./SavedBook";

class SavedBooks extends React.Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    deleteBook = (id) => {
        fetch('/deleteBook', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ id })
        })
            .then(
                fetch("/getBooks")
                    .then(r => r.json())
                    .then(books => this.setState({ books }))
            )
    }

    componentDidMount() {
        fetch("/getBooks")
            .then(r => r.json())
            .then(books => this.setState({ books }))
    }

    render() {
        if (this.state.books.length === 0) {
            return (
                <div>
                    <div className="center-align">
                        <h1>(React) Google Books Search</h1>
                        <h3>Search for and Save Books of Interest</h3>
                    </div>
                    <div>
                        <h1 className="center-align">You do not have saved books</h1>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="center-align">
                        <h1>(React) Google Books Search</h1>
                        <h3>Search for and Save Books of Interest</h3>
                    </div>
                    {this.state.books.map(book => {
                        if (book.link && book.price) {
                            return (
                                <SavedBook
                                    key={book.id}
                                    title={book.title}
                                    img={book.img}
                                    description={book.description}
                                    authors={book.authors}
                                    price={book.price}
                                    link={book.link}
                                    deleteBook={() => this.deleteBook(book._id)}
                                />
                            )
                        } else {
                            return (
                                <SavedBook
                                    key={book.id}
                                    title={book.title}
                                    img={book.img}
                                    description={book.description}
                                    authors={book.authors}
                                    deleteBook={() => this.deleteBook(book._id)}
                                />
                            )
                        }
                    }

                    )}
                </div>
            )
        }
    }
}

export default SavedBooks;