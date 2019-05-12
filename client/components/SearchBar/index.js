import React from "react";
import './style.css';

export default function SearchBar(props) {
    return (
        <input 
            type="search"
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className="animated-search-form"/>
    );
}