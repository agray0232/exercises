import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';
import { Route } from 'react-router-dom';
let RoutesExample = () => <div>Hello world!</div>;
let FAQExample = () => <div>Here's an FAQ component</div>;

class Routes extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px' }}>
                <h3>Routes are components that look at the browser's current location before deciding whether or not to render the given componenent</h3>
                <h3>If the Route's "path" prop matches the browser's current location, it will render the "component" prop</h3>
                <h3>If the Route's "path" prop doesn't match, nothing will render</h3>
                <br />
                <Route path="/routes" component={RoutesExample} />
                <Route path="/faq" component={FAQExample} />
                <pre>
                    <code className="language-javascript">
                        {`
import React from 'react'
import { Route } from 'react-router-dom';

let RoutesExample = () => <div>Hello world!</div>;
let FAQExample = () => <div>Here's another component</div>;

let MyComponent = () => (
    <div>
        <Route path="/routes" component={RoutesExample} /> // This component renders
        <Route path="/faq" component={FAQExample} /> // This component does not
    </div>
)

export default MyComponent;
                        `}
                    </code>
                </pre>
                <h3>If you need to pass a prop to the Route's inner component, use the render prop pattern:</h3>
                <pre>
                    <code className="language-javascript">
                        {`
import React from 'react'
import { Route } from 'react-router-dom';

let RoutesExample = () => <div>Hello world!</div>;
let FAQExample = () => <div>Here's another component</div>;

let MyComponent = () => (
    <div>
        <Route path="/routes" render={(props) => <RoutesExample {...props} color="red" />} /> // This component renders
        <Route path="/faq" render={(props) => <FAQExample {...props} color="blue" />} /> // This component does not
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

export default Routes;