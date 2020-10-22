import React, { Component } from 'react';
import Navbar from './NavbarComponent'
import CardDeckComponent from './CardDeckComponent'

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <CardDeckComponent />
            </div>
        );
    }
}

export default Main;