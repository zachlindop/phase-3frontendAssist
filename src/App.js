import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
     <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="#home">2021 Video Game Guide</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#users">Placeholder</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#games">Placeholder</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
 
      <ReactBootStrap.Nav.Link eventKey={2} href="#">
        Submit review?
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
    </div>
  );
}

export default App;
