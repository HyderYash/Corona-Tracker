import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'

class NavbarComponent extends Component {

    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home" style={{ color: 'white' }}>COVID-19 STATISTICS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <h3 className="ml-auto" style={{ color: 'white' }}>{this.state.date}</h3>
            </Navbar>
        );
    }
}

export default NavbarComponent;