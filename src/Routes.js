import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Principal from './components/principal/Principal';
import Detalle from "./components/detalle/Detalle";

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Principal" header={null} component={Principal} initial/>
        <Scene key="Detalle" header={null} component={Detalle}/>
      </Scene>
    </Router>
  </Root>
  );
};

export default Routes;
