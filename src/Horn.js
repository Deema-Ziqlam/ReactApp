import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


class Horn extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        counter:0,
    
    }
    }
    
     clickHandler = () =>{
       this.setState({
           counter: this.state.counter+1
       })
    }

    click = () =>{
   this.props.handlershow();
   this.props.getElement(this.props.title);
    }
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }} onClick={this.click}>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="primary" onClick={this.clickHandler}>like</Button>
                    </Card.Body>
                    <Card.Text>
                            {this.state.counter}
                        </Card.Text>
                </Card>
            </>
        );
    }
}

export default Horn;