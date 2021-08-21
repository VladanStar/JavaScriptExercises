import React from "react";
import { Nav } from "react-bootstrap";

export class MainMenu extends React.Component{

    render() {
        return (
            <Nav variant="tabs">

                <Nav.Link href="./">Home</Nav.Link>
                <Nav.Link href="./contact">Contact</Nav.Link>
                <Nav.Link href="./login">Login</Nav.Link>
            </Nav>
        );
    }
}