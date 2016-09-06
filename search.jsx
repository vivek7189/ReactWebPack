import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar1 extends React.Component {
    constructor() {
		super();
		// Initial state of the component
        this.state = {filterText: 'fg'}
    }
    handleChange(e){
        console.log('change',e.target.value,"value");
        this.setState({
            filterText:e.target.value
        })
    }
     render(){
        return (
            <div>fgfu
                <input type="text" onChange= {this.handleChange.bind(this)} value={this.state.filterText} />
            </div>
        )
    }
}

ReactDOM.render(<SearchBar1/>,document.getElementById('search'));


