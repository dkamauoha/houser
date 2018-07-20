import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateImg } from '../../ducks/reducer';

class StepTwo extends Component {
    render() {
        const { updateImg } = this.props;
        return (
            <div>
                <div className='wizard-header'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
                <div>
                    <h3>Image URL:</h3>
                    <input name='img'
                        onChange={(e) => updateImg(e.target.value)}/>
                </div>
                <Link to='/wizard/step1'><button>Previous Step</button></Link>
                <Link to='/wizard/step3'><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        img: state.img
    }
}

export default connect(mapStateToProps, { updateImg })(StepTwo);