import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';


export default (
    <Switch>
        <Route component={StepOne} exact path='/wizard/step1'/>
        <Route component={StepTwo} path='/wizard/step2'/>
        <Route component={StepThree} path='/wizard/step3'/>
    </Switch>
)