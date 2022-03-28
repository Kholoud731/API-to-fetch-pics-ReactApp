import React from "react";
import axios from "axios";
import SearchBar from './SearchBar';
import Image from "./Image";
import "../css/images.css"
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            images: [],
            error: ""
        }
    }
    onSubmitParent =(data)=>{

        axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query: data
            },
            headers:{
                Authorization: 'Client-ID 1cMcHNgjTxJH4KMyOEnltatOgQD3_zODlJiYuWaqoIc'
            }
        }).then((resp) => {
            console.log(resp.data.results)
            this.setState({images: resp.data.results})})
        .catch(error => this.setState({error: error.message}))
    }
    render(){
        return (
            <div style={{margin:"50px auto"}}>
               <SearchBar onSibmitParent={this.onSubmitParent}/>
               <div className="grid">
                    {this.state.images.map(elm => {
                    return <Image key={elm.id} image = {elm} />
                    })}
                </div>
            </div> 
       );
    }

}
 
export default App;