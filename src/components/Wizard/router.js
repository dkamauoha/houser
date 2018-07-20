import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';


export default (
    <Switch>
        <Route component={StepOne} exact path='/wizard/step1'/>
        <Route component={StepTwo} path='/wizard/step2'/>
        <Route component={StepThree} path='/wizard/step3'/>
    </Switch>
)