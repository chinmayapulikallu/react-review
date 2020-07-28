import React from 'react';
import './App.css';

class Practice extends React.Component {
    state = {
        name: 'Ryu',
        age: 30
    }


    handleClick = (event) => {
        // console.log(event.target)
        console.log(this.state)
        this.setState({
            name: "crystal"
        })
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted', this.state.name)
    }

    handleMouseOver = (event) => {
        console.log(event.target, event.pageX)
    }

    handleCopy = (event) => {
        console.log('try Being original')
    }

    render() {
        return (
            <div className="app-content">
                <h1>Hey, Ninjas</h1>
                {/* Dynamic Value */}
                {/* <p>{Math.random() * 10}</p> */}
                <p>My name is "{this.state.name}" and my age is {this.state.age}</p>
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseOver={this.handleMouseOver}>Hover Me</button>
                <p onCopy={this.handleCopy}>What we think, we become</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Practice;
