import React, { Component } from 'react';
import { CardDeck, Card } from 'react-bootstrap'

class CardDeckComponent extends Component {

    constructor() {
        super();
        this.state = {
            MainAPIData: []
        }
    }

    componentDidMount() {
        fetch('https://disease.sh/v3/covid-19/all').then((res) => {
            res.json().then((result) => {
                console.log(result);
                this.setState({ MainAPIData: result })
            })
        })
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <h1 style={{ backgroundColor: 'white', width: '230px', borderRadius: '17px', border: '5px solid black' }} className="mx-auto mt-2">World Data</h1>
                </div>
                <CardDeck className="mt-5 mx-auto">
                    <Card className="bg-primary text-white" style={{ border: '5px solid black', borderRadius: '10px' }}>
                        <Card.Header className="text-center" style={{ borderBottom: '5px solid black' }}><h1>Active Case</h1></Card.Header>
                        <Card.Body>
                            <h3 className="text-center text-white">{this.state.MainAPIData.active}</h3>
                        </Card.Body>
                    </Card>
                    <Card className="bg-danger text-white" style={{ border: '5px solid black', borderRadius: '10px' }}>
                        <Card.Header className="text-center" style={{ borderBottom: '5px solid black' }}><h1>Death Case</h1></Card.Header>
                        <Card.Body>
                            <h3 className="text-center">{this.state.MainAPIData.deaths}</h3>
                        </Card.Body>
                    </Card>
                    <Card className="bg-warning text-white" style={{ border: '5px solid black', borderRadius: '10px' }}>
                        <Card.Header className="text-center" style={{ borderBottom: '5px solid black' }}><h1>Critical Case</h1></Card.Header>
                        <Card.Body>
                            <h3 className="text-center">{this.state.MainAPIData.critical}</h3>
                        </Card.Body>
                    </Card>
                    <Card className="bg-secondary text-white" style={{ border: '5px solid black', borderRadius: '10px' }}>
                        <Card.Header className="text-center" style={{ borderBottom: '5px solid black' }}><h1>Today's Case</h1></Card.Header>
                        <Card.Body>
                            <h3 className="text-center">{this.state.MainAPIData.todayCases}</h3>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        );
    }
}

export default CardDeckComponent;