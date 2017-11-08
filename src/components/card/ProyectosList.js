import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StatusBar} from 'react-native';
import Card from './Card';
import {Content} from 'native-base';

class ProyectosList extends Component {
    state={
        allProyectos:[]
    };

    componentWillMount(){
        const {allProyectos} = this.props;
        this.setState({allProyectos});
    };

    render(){
        const {allProyectos} = this.state;
        return(

                <Content>
                    <StatusBar backgroundColor="#802154" barStyle="light-content"/>
                {allProyectos.map((p, index)=>{
                    return <Card
                        key={index}
                        index={index}
                        p={p}
                    />
                })}
                </Content>

        );
    };
};

function mapStateToProps(state, ownProps) {
  return {allProyectos: state.proyectos.allProyectos};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(dispatch)};
}

export default ProyectosList = connect(mapStateToProps, mapDispatchToProps)(ProyectosList);
