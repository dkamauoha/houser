import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StepTwo extends Component {
    constructor () {
        super();
        this.state = {
            img: ''
        }
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className='wizard-header'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
                <div>
                    <h3>Image URL:</h3>
                    <input name='img'
                        onChange={(e) => this.handleInput(e)}/>
                </div>
                <Link t0='/wizard/step1'><button>Previous Step</button></Link>
                <Link to='/wizard/step3'><button>Next Step</button></Link>
            </div>
        )
    }
}