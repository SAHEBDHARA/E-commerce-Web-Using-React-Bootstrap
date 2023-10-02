import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Counter from './Components/Counter/Counter';
import Register from './Components/Registration/Registration';
import Userlist from './Components/Users/userLIst';

function App() {

  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container >
      </Navbar>
      {/* <Counter/> */}
      {/* <Register/> */}
      <Userlist/>
    </>
  )
}

export default App


  {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
