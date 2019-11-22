import React from "react";

const Search = props =>
    (
        <div>
            <div className="center-align">
                <h1>(React) Google Books Search</h1>
                <h3>Search for and Save Books of Interest</h3>
            </div>
            <div>
                <input style={{ fontSize: 30 }} placeholder="Book title" id="bookName"></input>
                <div className="row">
                    <div className="col s12">
                        <button onClick={props.takeBook} className="btn btn-block waves-effect waves-light btn-large right" style={{ fontSize: 30, margin: 30, backgroundColor: "#1387ff" }} type="submit">
                        Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

export default Search;