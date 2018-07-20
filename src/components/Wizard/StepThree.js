import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateMortgage, updateRent } from '../../ducks/reducer';

class StepThree extends Component {
    constructor () {
        super();
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addHouse () {
        axios.post('/api/houses', {name: this.state.name, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip})
            .then(console.log('House Added'));
        
    }

    render () {
        const { updateMortgage, updateRent } = this.props;
        return (
            <div>
                <div>
                    <h3>Monthly Mortgage Amount</h3>
                    <input name='mortgage'
                        onChange={(e) => updateMortgage(e.target.value)}/>
                </div>
                <div>
                    <h3>Desired Monthly Rent</h3>
                    <input name='rent'
                        onChange={(e) => updateRent(e.target.value)}/>
                </div>
                <Link t0='/wizard/step3'><button>Previous Step</button></Link>
                <Link to='/'><button onClick={() => this.addHouse()}>Complete</button></Link>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { mortgage, rent } = state;
    return {
        mortgage,
        rent
    }
}

export default connect(mapStateToProps, { updateMortgage, updateRent })(StepThree);