class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 5
        }
        // You have to bind 'this' to the function so that the function has scope to "this"
        // Or you can make 'handleClick' a variable ... handleClick = () => (...)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            value: this.state.value + 1
        })
    }

    render() {
        return (
            <div className="counter">
                <h1>{this.state.value}</h1>
                <button onClick={this.handleClick}>Add 1</button>
            </div>
        )
    }
}