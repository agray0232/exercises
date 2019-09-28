import React from 'react';
import axios from 'axios';
import './Jobs.css';
import JobsListItem from "./JobsListItem.js";

class Jobs extends React.Component {
    constructor() {
        super();

        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        axios.get('api/jobs').then(res => {
            this.setState({ jobs: res.data })
        });
    }

    render() {
        var jobsJSX = this.state.jobs.map((job, index) => {
            return <JobsListItem key={index} {...job} />
        }
        )

        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Jobs In Atlanta</h1>
                        <p className="App-subtitle">Click to explore jobs</p>
                    </header>
                </div>
                {jobsJSX}
            </div>
        )
    }
}

export default Jobs;