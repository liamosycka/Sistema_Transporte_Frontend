import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <Nav
            activeKey="/home"
        >
            <Nav.Item>
                <Nav.Link href="/home">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/calendar">Calendar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/test">Test</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default NavBar;