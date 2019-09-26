import React from 'react';
import { Link } from 'react-router-dom';

var Content = (props) => {
    var next = props.num + 1;
    if (next === 4) {
        next = 1;
    }
    return (
        <div>
            <div>Content {props.num}</div>
            <div><Link to={"/" + next}>Next</Link ></div >
        </div>
    );
}

export default Content;