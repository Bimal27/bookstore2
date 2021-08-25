
import {  Card, Container ,Row} from 'react-bootstrap'


const SingleBook = (props) => 
(
<Container>
    <Row className="justify-content-center"> 
        <Card style={{width:'18rem'}}>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
            <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
        </Card>
</Row>
</Container>
)

export default SingleBook