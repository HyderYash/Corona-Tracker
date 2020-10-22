import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

class Statistics extends Component {

    constructor() {
        super();
        this.state = {
            CoronaAPIData: []
        }
    }

    componentDidMount() {
        fetch('https://disease.sh/v3/covid-19/countries').then((res) => {
            res.json().then((result) => {
                console.log(result);
                this.setState({ CoronaAPIData: result })
            })
        })
    }

    render() {
        return (
            <div className="mt-5">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Country Name</th>
                            <th>Active Cases</th>
                            <th>Cases</th>
                            <th>Deaths</th>
                            <th>Today Cases</th>
                            <th>Continent</th>
                            <th>Critical</th>
                            <th>Today's Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.CoronaAPIData.map((items, key) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{items.country}</td>
                                    <td>{items.active}</td>
                                    <td>{items.cases}</td>
                                    <td>{items.deaths}</td>
                                    <td>{items.todayCases}</td>
                                    <td>{items.continent}</td>
                                    <td>{items.critical}</td>
                                    <td>{items.todayRecovered}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Statistics;