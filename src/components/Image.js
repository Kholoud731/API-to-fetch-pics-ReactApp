import React from 'react';

class Image extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            spans: 0
        }
        this.imageRef = React.createRef()
    }

    componentDidMount(){

        this.imageRef.current.addEventListener('load',this.setHeight)
    }

    setHeight = ()=>{
        const height = this.imageRef.current.clientHeight
        const span = Math.ceil(height / 10) 
        console.log(span)
        this.setState({spans: span})
    }


    render(){
        return ( 
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
            <img 
            ref = {this.imageRef}
            src={this.props.image.urls.regular} 
            alt={this.props.image.discription}/>
            </div>
         );
    }

}
 
export default Image;