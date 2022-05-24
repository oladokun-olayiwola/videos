import React from 'react'

class SearchBar extends React.Component{

    state = { term: ''}

    handleChange = e => {
        this.setState({term: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onDrop(this.state.term);
    }



    render() {
        return (
          <div className="ui segment container">
                <form onSubmit={this.handleSubmit} className="ui form" >
                    <div className='field'>
                    <label>Video search</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
          </div>
        );
    }
}


export default SearchBar;