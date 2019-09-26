import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';
import { withRouter } from 'react-router-dom';

class WithRouter extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        console.log(this.props)
        return (
            <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px' }}>
                <h3>withRouter is a Higher Order Component that provides some props to your component</h3>
                <h3>The "history" prop lets you view and manage the entire routing history since the app loaded up</h3>
                <h3>The "location" prop provides information about the current browser location, and provides methods to programatically change locations without a Link component</h3>
                <h3>The "match" prop provides metadata about the closest matching Route component</h3>
                <br />
                <div>This component is enhanced with "withRouter". Open the console and explore the "history", "location", and "match" props.</div>
                <pre>
                    <code className="language-javascript">
                        {`
import React from 'react'
import { withRouter } from 'react-router-dom';

let MyComponent = (props) => {
    console.log(props);
    let { history, location, match } = props;
    return (
        <div>This component is enhanced with "withRouter". Open the console and explore the "history", "location", and "match" props.</div>             
    )
}
export default withRouter(MyComponent);
                        `}
                    </code>
                </pre>
            </div>
        );
    }
}

export default withRouter(WithRouter);