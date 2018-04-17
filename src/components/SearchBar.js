import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = { term: ''};
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    render(){
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                Value: {this.state.term}
            </div>
        )
    }
}