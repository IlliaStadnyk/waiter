import { NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <div className="container text-white">Waiter.app</div>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;