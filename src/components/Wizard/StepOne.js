import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer';

class StepOne extends Component {


    render () {
        const { updateName, updateAddress, updateCity, updateState, updateZip } = this.props;
        return (
            <div>
                <div>
                    <div>
                        <h3>Property Name</h3>
                        <input name='name'
                            onChange={(e) => updateName(e.target.value)}/>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <input name='address'
                            onChange={(e) => updateAddress(e.target.value)}/>
                    </div>
                    <div>
                        <h3>City</h3>
                        <input name='city'
                            onChange={(e) => updateCity(e.target.value)}/>
                    </div>
                    <div>
                        <h3>State</h3>
                        <input name='state'
                            onChange={(e) => updateState(e.target.value)}/>
                    </div>
                    <div>
                        <h3>Zip</h3>
                        <input name='zip'
                            onChange={(e) => updateZip(e.target.value)}/>
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

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip })(StepOne);