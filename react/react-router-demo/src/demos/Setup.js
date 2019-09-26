import React, { Component } from 'react';
import Prism from 'prismjs';
import '../prism.css';

class Links extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }
    render() {
        return (
            <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px' }}>
                <h3>Install 'react-router-dom' with npm.</h3>
                <h3>In index.js, import the BrowserRouter component and wrap your App component with it</h3>
                <pre>
                    <code className="language-javascript">
                        {`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
                        `}
                    </code>
                </pre>
            </div>
        );
    }
}

export default Links;