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
        axios.post('/api/houses', {
                name: this.props.name,
                address: this.props.address,
                city: this.props.city,
                state: this.props.state,
                zip: this.props.zip,
                img: this.props.img,
                mortgage: this.props.mortgage,
                rent:this.props.rent
            })
            .then(console.log('House Added'));
        
    }

    render () {
        const { updateMortgage, updateRent } = this.props;
        return (
            <div>
                <div className='wizard-header'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
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
                <Link to='/wizard/step2'><button>Previous Step</button></Link>
                <Link to='/'><button onClick={() => this.addHouse()}>Complete</button></Link>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, { updateMortgage, updateRent })(StepThree);