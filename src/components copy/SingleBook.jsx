
import { Component } from 'react'
import {  Card, Container ,Row} from 'react-bootstrap'


class SingleBook extends Component{
    state={
        selected: false
    }
    render(){
        return(
        <Container>
            <Row className="justify-content-center"> 
                <Card style={{width:'18rem'}} onClick={() =>this.setState({selected: !this.state.selected})}
                style={{border: this.state.selected ? "4px solid green" : "none"}} >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
                </Card>
        </Row>
        </Container>
        )
    }
} 

export default SingleBook