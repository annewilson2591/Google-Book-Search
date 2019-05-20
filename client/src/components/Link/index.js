import React from "react";
import './style.css';

export default function LinkBtn(props) {
    return <button
        className="button-custom">
        {props.label}</button>
}