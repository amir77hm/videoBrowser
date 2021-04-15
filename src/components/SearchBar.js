import React, { Component } from 'react'
// import "../style.css";

export default class SearchBar extends Component {

    state = {
        term: ''
    }

    onTermChange = (e) => this.setState({ term: e.target.value })

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className='searchBar'>
                <form onSubmit={this.formSubmit}>
                    <div className='form-input'>
                        <label htmlFor='title'>Enter your term:</label>
                        <input type='text' id='title' onChange={this.onTermChange}></input>
                    </div>
                </form>
            </div>
        )
    }
}
