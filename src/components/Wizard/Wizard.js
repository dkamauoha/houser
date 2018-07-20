import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import router from './router';

export default class Wizard extends Component {

    render () {
        return (
            <div>
                <div className='wizard-header'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
                <div>
                    {router}
                </div>
            </div>
        )
    }
}