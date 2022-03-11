import { Accordion } from "react-bootstrap";
import "./DropDown.css";
import Cards from "./Cards";
function DropDown() {
  return (
    <>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <Cards />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" alwaysOpen>
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <Cards />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" alwaysOpen>
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            <Cards />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" alwaysOpen>
          <Accordion.Header>Accordion Item #4</Accordion.Header>
          <Accordion.Body>
            <Cards />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default DropDown;
