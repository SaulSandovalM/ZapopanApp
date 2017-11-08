import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ProyectosList from "../card/ProyectosList";
import {ResultList} from './listado/ResultList';
import {Container} from 'native-base';
import Encabezado from "./Encabezado";
import {setSearch} from '../../actions/filterActions';

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  onSearch = (value) => {
    this.props.setSearch(value);
    let results = this.props.allProyectos;
    const rEx = new RegExp(value, 'i');
    results = results.filter(p => rEx.test(p.titulo) || rEx.test(p.categoria));
    this.setState({results})
  };

    render(){
        const {search} = this.props;
        const {results} = this.state;
        return(
            <Container style={{backgroundColor: '#BDBDBD'}}>
                <Encabezado onSearch={this.onSearch} />
                {
                    !search
                        ?
                        <ProyectosList/>
                        :
                        <ResultList results={results}/>
                }
            </Container>
        );
    };
};

function mapStateToProps(state) {
  return {search: state.filter.search, allProyectos: state.proyectos.allProyectos}
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#802154'
  }
});

export default Principal = connect(mapStateToProps, {setSearch})(Principal);
