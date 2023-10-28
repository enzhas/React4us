import React , { useEffect, useState } from "react";
import Data from "../mock-data.json";
import './search.css';
import 'font-awesome/css/font-awesome.min.css';

function Search() {
    const [query, setQuery] = useState("")
    return (
        <div className="divik">
            <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
            <div className="divik2">
            {
            Data.filter(post => {
                // console.log(query.length === 0);
                if (query.length === 0) {
                    console.log(post);
                    return NaN;
                } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                    return post;  
                }
                
            }).map((post, index) => (
                <div className="boxxx" key={index}>
                <p>{post.title}</p>
                <p>{post.author}</p>
                </div>
            ))
            }
            </div>
            {/* <i className="fa fa-search"></i> */}
        </div>
    );
}
export default Search;