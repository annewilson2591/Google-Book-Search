import React from "react";
import './style.css';

export default function LinkBtn(props) {
    return <Button
        className="button-custom">
        {props.label}</Button>
}