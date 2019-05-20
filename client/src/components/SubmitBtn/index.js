import React from "react";
import './style.css';

export default function SubmitBtn(props) {
    return <button 
        className="button-submit"
        onClick={props.onClick}>
        {props.label}</button>
}