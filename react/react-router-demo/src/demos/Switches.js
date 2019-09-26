import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';
import { Route, Switch } from 'react-router-dom';
let SwitchesExample = () => <div>Hello world!</div>;
let HomePage = () => <div>Homepage</div>;

class Switches extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px' }}>
                <h3>Switches are meant to wrap around Routes</h3>
                <h3>If multiple Routes in the Switch match the browser's current location, only the first Route will render</h3>
                <br />
                <b>BAD:</b>
                <Route path="/Switches" component={SwitchesExample} />
                <Route path="/" component={HomePage} />
                
                <pre>
                    <code className="language-javascript">
                        {`
import React from 'react'
import { Route } from 'react-router-dom';

let SwitchesExample = () => <div>Hello world!</div>;
let HomePage = () => <div>Homepage</div>;

let MyComponent = () => (
    <div>
        <Route path="/switches" component={SwitchesExample} /> // This component matches
        <Route path="/" component={HomePage} /> // This component also matches!
    </div>
)

export default MyComponent;
                        `}
                    </code>
                </pre>
                <br />
                <b>GOOD:</b>
                <Switch>
                    <Route path="/Switches" component={SwitchesExample} />
                    <Route path="/" component={HomePage} />
                </Switch>
                <pre>
                    <code className="language-javascript">
                        {`
import React from 'react'
import { Route, Switch } from 'react-router-dom';

let SwitchesExample = () => <div>Hello world!</div>;
let HomePage = () => <div>Homepage</div>;

let MyComponent = () => (
    <div>
        <Switch>
            <Route path="/switches" component={SwitchesExample} /> // This component matches
            <Route path="/" component={HomePage} /> // This component also matches!
        </Switch>
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

export default Switches;