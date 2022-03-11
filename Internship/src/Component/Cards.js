
import {Card, Container,Button,Row } from 'react-bootstrap'
import './Card.css'

function Cards(){
    return(
        <>
         <Container>
      <Row className="Card">
    <Card className="card" style={{ width: '9rem' }}>
    <Card.Title>CANNABI</Card.Title>
  <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1650/5551/products/men-s-round-neck-plain-t-shirt-white-regular-fit-t-shirt-wolfattire-2549495201837_800x.jpg?v=1561033865" />
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title
    </Card.Text>
    <Button variant="primary">BUY</Button>
  </Card.Body>
</Card>
<Card style={{ width: '9rem' }}>
    <Card.Title >SOULEDE</Card.Title>
  <Card.Img variant="top" src="https://5.imimg.com/data5/GH/LX/MY-44298151/mens-round-neck-black-plain-t-shirt-500x500.jpg" />
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title
    </Card.Text>
    <Button variant="primary">BUY</Button>
  </Card.Body>
</Card>
</Row>
</Container>
        </>
    )
}
export default Cards;