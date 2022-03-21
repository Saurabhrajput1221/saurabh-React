// import { Navbar,Container,Nav,Button, NavDropdown, Form, FormControl} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Nav.css";

const MyNav = () => {
  return (
    
      <div className="nav">
        <div className="logo">  <img id="logoImage"  src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"></img></div>
        
          <a href="#">Xiaomi Phones</a>
          <a href="#">Redmi Phones</a>
          <a href="#">TV</a>
          <a href="#">Laptops</a>
          <a href="#">Fitness</a>
          <a href="#">Home</a>
          <a href="#">Audio</a>
          <a href="#">Accessories</a>
        
        <div className="searchbox">
        <input type="text" name="search"  placeholder="Search Products"/>
             
         
        </div>
      </div>
    
  );
};
export default MyNav;

{
  /* <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand><img id="Logo" src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Xiaomi Phones</Nav.Link>
        <Nav.Link href="#action2">Redmi Phones</Nav.Link>
        <Nav.Link href="#action2">TV</Nav.Link>
        <Nav.Link href="#action2">Laptops</Nav.Link>
        <Nav.Link href="#action2">Fitness</Nav.Link>
        <Nav.Link href="#action2">Home</Nav.Link>
        <Nav.Link href="#action2">Audio</Nav.Link>
        <Nav.Link href="#action2">Accessories</Nav.Link>       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search Products"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> */
}
