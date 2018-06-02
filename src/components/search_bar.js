import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term:''}
    }
    render(){
      return(
          <div className="search-container">

                <input className="searchbar" placeholder="Search Video..." value={this.state.term}
                    onChange={(event)=> this.onInputChange(event.target.value)}/>

          </div>
      );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onsearch(term);
    }
}

export default SearchBar;