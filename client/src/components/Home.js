import React, { Component } from 'react';

import Book from "./Book";
import Search from "./Search";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    saveBook = (id) => {
        let book_info = {};
        for (let i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id === id) {
                book_info = this.state.items[i]
            }
        }

        let saved_book = {}

        if (book_info.saleInfo.listPrice && book_info.saleInfo){
             saved_book = {
                title: book_info.volumeInfo.title,
                img: book_info.volumeInfo.imageLinks.thumbnail,
                description: book_info.volumeInfo.description,
                authors: book_info.volumeInfo.authors,
                price: book_info.saleInfo.listPrice.amount,
                link: book_info.saleInfo.buyLink,
                id: book_info.id
        }
        } else {
             saved_book = {
                title: book_info.volumeInfo.title,
                img: book_info.volumeInfo.imageLinks.thumbnail,
                description: book_info.volumeInfo.description,
                authors: book_info.volumeInfo.authors,
                id: book_info.id
             }
            }
        fetch(`/saveBook`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ saved_book })
        })
}

    takeBook = () => {
        let book = document.getElementById("bookName").value
        fetch('/getBookInfo', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ book })
        })
            .then(r => r.json())
            .then(r => {
                let items = r.items;
                console.log(items)
                this.setState({ items }, () => {
                })

            })
    }

    render() {
        if (this.state.items.length === 0) {
            return (


                <div>
                    <Search takeBook={this.takeBook} />
                </div>
            );
        } else {
            return (
                <div>
                    <div className="container">
                        <Search takeBook={this.takeBook} />
                    </div>

                    {
                        this.state.items.map((x) =>

                            <Book
                                key={x.id}
                                volumeInfo={x.volumeInfo}
                                saleInfo={x.saleInfo}
                                saveBook={() => this.saveBook(x.id)}
                            />)
                    }

                </div >
            )
        }
    }
}

export default Home;