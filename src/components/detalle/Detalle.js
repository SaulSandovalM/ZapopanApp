import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, StatusBar} from 'react-native';
import {Container, H1, Title, Header, Icon, Button, ListItem, Card, CardItem, Body} from 'native-base';
import Cabecera from './Cabecera';

export default class Detalle extends Component <{}> {
  render() {
    console.log(this.props.p);
      const {p} = this.props;
    return (
      <Container>
        <Cabecera/>
        <StatusBar backgroundColor="#802154" barStyle="light-content"/>
        <ScrollView>
          <Image style={styles.img} source={{
            uri: p.imagen
          }}/>
          <H1 style={styles.h1}>{p.titulo}</H1>
          <Title style={{color: 'black'}}>Por: {p.autor}</Title>
          <Text style={styles.text}>{p.descripcion}</Text>
          <View style={styles.view}>
            <Icon name="ios-bookmarks" style={styles.margin}/>
            <Text style={styles.margin2}>{p.categoria}</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.texto}>850 Seguidores</Text>
            <Text style={styles.texto}>20 Aportadores</Text>
          </View>

          <ListItem itemDivider style={styles.back}>
              <Text style={styles.texto2}>RECOMPENZAS</Text>
          </ListItem>

          <View style={styles.card}>
            <Card>
              <CardItem header style={{backgroundColor: '#8FB548'}}>
                <Title style={{color: 'white'}}>Donar $10.00 o mas</Title>
              </CardItem>
              <CardItem style={{backgroundColor: '#8FB548'}}>
                <Body>
                  <Text style={{color: 'white'}}>
                    Thank You! (US $1.20) {'\n'}
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor
                  </Text>
                </Body>
              </CardItem>

            </Card>

            <Card >
              <CardItem header>
                <Title style={styles.title}>Donar $10.00 o mas</Title>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Thank You! (US $1.20) {'\n'}
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor
                  </Text>
                </Body>
              </CardItem>

            </Card>

            <Card>
              <CardItem header>
                <Title style={styles.title}>Donar $10.00 o mas</Title>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Thank You! (US $1.20) {'\n'}
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor
                  </Text>
                </Body>
              </CardItem>

            </Card>
          </View>

      </ScrollView>
      <Button style={styles.boton}>
        <Text style={styles.texto2}>Donar</Text>
      </Button>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200
  },
  h1: {
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
    margin: 20
  },
  texto: {
    fontSize: 20
  },
  texto2: {
    color: 'white',
    fontSize: 20
  },
  view: {
    flexDirection: 'row',
    margin: 25,
    justifyContent: 'center'
  },
  view2: {
    flexDirection: 'row',
    margin: 25,
    justifyContent: 'space-around'
  },
  margin: {
    marginRight: 10
  },
  margin2: {
    marginRight: 10,
    marginTop: 5,
    fontWeight: 'bold'
  },
  boton: {
    width: '100%',
    backgroundColor: '#802154',
    justifyContent: 'center'
  },
  back: {
    backgroundColor: '#747372',
    justifyContent: 'center',
    width: '100%'
  },
  color: {
    color: 'white',
    fontWeight: 'bold'
  },
  title: {
    color: '#61abf8',
    fontSize: 18
  },
  card: {
    marginLeft: 20,
    marginRight: 20
  },
  fondo: {
    backgroundColor: '#9ed7f3'
  }
});
