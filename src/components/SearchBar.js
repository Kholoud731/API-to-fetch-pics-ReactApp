import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state={
            text:''
        }
    }

    onChangeHandeler = (e)=>{
        this.setState({text: e.target.value})
    }

    onSubmitHandeler = (e)=>{
        e.preventDefault();
        this.props.onSibmitParent(this.state.text)
    }
    
    render() { 
        return (

            <div className="ui segment">
                <form className="ui form" onSubmit={(e)=>this.onSubmitHandeler(e)}>
                       <div>
                         <label>Search Image:</label>
                       </div>
                       <div className="ui input">
                        <input type="text" 
                        placeholder="Search..."
                        value={this.state.text}
                        onChange={(e)=>this.onChangeHandeler(e)} />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;