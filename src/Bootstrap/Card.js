import "./Card.css";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function Cards() {
  const Allcards = [
    {
      id: 1,
      title: "Laptop 1",
      link: "https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format",
      descritption:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
    {
      id: 2,
      title: "Laptop one",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAmOGZKFERpJo8Oi-nROJ4S-mDyy_nAGtsGbPliA-3P-7wR2iKatK5Ezd6WwbjbWl_gA&usqp=CAU",
      descritption:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
    {
      id: 3,
      title: "Laptop one",
      link: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
      descritption:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
    {
      id: 3,
      title: "Laptop one",
      link: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
      descritption:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
    {
      id: 3,
      title: "Laptop one",
      link: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
      descritption:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
    {
      id: 3,
      title: "Laptop one",
      link: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80",
      descritption:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
  ];
  return (
    <div className="Cards">
      <Container>
        <Row>
          {Allcards.map((Cards) => (
            <Col md={4} key={Cards.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Cards.link} />
                <Card.Body>
                  <Card.Title>{Cards.title}</Card.Title>
                  <Card.Text>{Cards.descritption}</Card.Text>
                  <Button variant="primary">BUY</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
