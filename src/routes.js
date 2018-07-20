import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import StepOne from './components/Wizard/StepOne';
import StepTwo from './components/Wizard/StepTwo';
import StepThree from './components/Wizard/StepThree';

const routes = (
    <Switch>
        <Route component={Dashboard} exact path='/'/>
        <Route component={Wizard} path ='/wizard/step1'/>
    </Switch>
)

export default routes;