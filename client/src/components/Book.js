import React from "react";

const Book = (props) => {
    if (props.saleInfo.saleability === "NOT_FOR_SALE"){
        return (
            <div>
            <div className="col s12 m7">
                <h2 style={{ marginTop: 25 }} className="header">{props.volumeInfo.title}</h2>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{props.volumeInfo.description}</p>
                            <br />
                            <br />
                            <p className="right">{props.volumeInfo.authors}</p>
                        </div>
                        <div className="card-action">
                            <p> Not for sale </p>
                            <p>
                                <button onClick={props.saveBook} style={{ backgroundColor: "#1387ff", display: "inline-block" }} className="btn-floating btn-large waves-effect waves-light right">Save</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div>
                <div className="col s12 m7">
                    <h2 style={{ marginTop: 25 }} className="header">{props.volumeInfo.title}</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>{props.volumeInfo.description}</p>
                                <br />
                                <br />
                                <p className="right">{props.volumeInfo.authors}</p>
                            </div>
                            <div className="card-action">
                                <p> ${props.saleInfo.listPrice.amount} </p>
                                <p>
                                    <a target="_blank" rel="nonopener nonreferrer" style={{ display: "inline-block" }} href={props.saleInfo.buyLink}>Buy</a>
                                    <button onClick={props.saveBook} style={{ backgroundColor: "#1387ff", display: "inline-block" }} className="btn-floating btn-large waves-effect waves-light right">Save</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;