import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';
import { Link, NavLink } from 'react-router-dom';

class Links extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px'}}>
                <h3>Links are just enhanced a tags - They change the URL in your browser, but they prevent a page refresh and let your Routes work their magic.</h3>
                <Link to="/routes">This link will change the browser location to "/routes"</Link>
                <pre>
                    <code className="language-javascript">
                        {`
import React from 'react'
import { Link } from 'react-router-dom';
let MyComponent = () => (
    <Link to="/routes">This link will change the browser location to "/routes"</Link>
)
export default MyComponent;
                        `}
                    </code>
                </pre>
                <h3>NavLinks are a bit fancier - when the browser's current location matches the NavLink's "to" prop, the link will have the className "active" added to it.</h3>
                <h3>Use CSS to style active NavLinks</h3>
                <NavLink to="/routes">This link is not active</NavLink>
                <NavLink to="/links">This link is active</NavLink>
                <pre>
                    <code className="language-javascript">
                        {`
import React from 'react'
import { NavLink } from 'react-router-dom';
let MyComponent = () => (
    <div>
        // in index.css you'll find the following css:
        //  a.active { 
        //     color: red;
        //  }
        <NavLink to="/routes">This link is not active</NavLink>
        <NavLink to="/links">This link is active</NavLink>
    </div>
)
export default MyComponent;
                        `}
                    </code>
                </pre>
            </div>
        );
    }
}

export default Links;