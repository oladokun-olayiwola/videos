import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";



class App extends React.Component{
    onFormSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return(
            <SearchBar  onDrop={this.onFormSubmit}/>
        )
    }
}



export default App;