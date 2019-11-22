import React from "react"

const SavedBook = (props) => {
    if (props.price && props.link){
        return (
            <div>
                <div className="col s12 m7">
                    <h2 style={{ marginTop: 25 }} className="header">{props.title}</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={props.img} alt={props.title} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>{props.description}</p>
                                <br />
                                <br />
                                <p className="right">{props.authors}</p>
                            </div>
                            <div className="card-action">
                                <p> ${props.price} </p>
                                <p>
                                    <a target="_blank" rel="nonopener nonreferrer" style={{ display: "inline-block" }} href={props.link}>Buy</a>
                                    <button onClick={props.deleteBook} style={{ backgroundColor: "#1387ff", display: "inline-block" }} className="btn-floating btn-large waves-effect waves-light right">Delete</button>
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
                    <h2 style={{ marginTop: 25 }} className="header">{props.title}</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={props.img} alt={props.title} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>{props.description}</p>
                                <br />
                                <br />
                                <p className="right">{props.authors}</p>
                            </div>
                            <div className="card-action">
                                <p>Not for sale</p>
                                <p>
                                    <button onClick={props.deleteBook} style={{ backgroundColor: "#1387ff", display: "inline-block" }} className="btn-floating btn-large waves-effect waves-light right">Delete</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default SavedBook;