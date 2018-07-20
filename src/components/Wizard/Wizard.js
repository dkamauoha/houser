import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

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