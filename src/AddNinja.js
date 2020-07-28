import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name: '',
        age: null,
        belt: ''

    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addNinja(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;