import React from 'react';
import Data from './Data.json'
import Horn from './Horn';
import Selected from './Selected';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
            Element:{}
        }
        this.selectedHorn={};
        this.Data = Data;
    }
    getElement = (title)=>{
      this.selectedHorn = this.Data.find(ele =>{
         if(ele.title == title)
         return ele;
      })
      this.setState({
        Element:this.selectedHorn
    })

    }
    handleShow = ()=>{
        this.setState({
            show:true,
            Element:this.selectedHorn
        })
console.log("selectedhorn::::", this.selectedHorn);
    }
    handleClose = ()=>{
        this.setState({
            show:false,
            Element:this.selectedHorn
        })
    }
    render() {
        return (
            <>
                {
                    Data.map((item,key) => {
                        return(
                       
                     <Horn
                     getElement= {this.getElement}
                     handlershow={this.handleShow}
                     key = {key}
                     title = {item.title}
                     description = {item.description}
                     image = {item.image_url}
                     />
                      
                     )
                    }  
                     
                        )}
                        <Selected 
                        
                        show = {this.state.show}
                        handlershow={this.handleShow}
                        handleClose={this.handleClose}
                        ele = {this.state.Element}
                        />
                
            </>
        );
    }
}

export default Main;