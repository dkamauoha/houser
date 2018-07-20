import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Components
import House from '../House/House';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount () {
        // console.log('hello')
        axios.get('/api/houses').then(res => {
            console.log(res.data)
            this.setState({houses: res.data})
        })
    }

    deleteHouse (id) {
        axios.delete(`/api/houses/${id}`).then(() => this.componentDidMount());
    }

    render () {
        const house = this.state.houses.map((house, i) => {
           return ( <House key={i}
                house={house}
                deleteHouse={this.deleteHouse}/>
           )
    });
        return (
            <div>
                <div>
                    <div>Dashboard</div>
                    <Link to='/wizard/step1'><button>Add New Property</button></Link>
                </div>
                {house}
            </div>
            
        )
    }
}