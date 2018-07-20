import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class StepOne extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        console.log(this.state);
        console.log(this.props);
        return (
            <div>
                <div>
                    <div>
                        <h3>Property Name</h3>
                        <input name='name'
                            onChange={(e) => this.handleInput(e)}/>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <input name='address'
                            onChange={(e) => this.handleInput(e)}/>
                    </div>
                    <div>
                        <h3>City</h3>
                        <input name='city'
                            onChange={(e) => this.handleInput(e)}/>
                    </div>
                    <div>
                        <h3>State</h3>
                        <input name='state'
                            onChange={(e) => this.handleInput(e)}/>
                    </div>
                    <div>
                        <h3>Zip</h3>
                        <input name='zip'
                            onChange={(e) => this.handleInput(e)}/>
                    </div>
                    <Link to='/wizard/step2'><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps)(StepOne);