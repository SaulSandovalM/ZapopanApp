import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, StatusBar} from 'react-native';
import {Container, H1, Title, Icon, Button, ListItem, Card, CardItem, Body} from 'native-base';
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
          <Title style={styles.title1}>Por: {p.autor}</Title>
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
              <CardItem header>
                <Title style={styles.title}>Recompensa destacada</Title>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={styles.cardItem}>$ 2,500.00 MXN</Text> {'\n'}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur,
                    cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed
                    sequi sunt voluptatum?
                  </Text>
                </Body>
              </CardItem>

            </Card>

            <Card >
              <CardItem header>
                <Title style={styles.title}>Viaje a SF</Title>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={styles.cardItem}>$ 20.00 MXN</Text> {'\n'}
                    Te picho todo el viaje a san francisco chetito
                  </Text>
                </Body>
              </CardItem>

            </Card>

            <Card>
              <CardItem header>
                <Title style={styles.title}>Viaje a Canada</Title>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={styles.cardItem}>$ 1,000.00 MXN</Text> {'\n'}
                    Todo pagado con todo y spa a Toronto oh siii
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
    color: 'black',
    fontSize: 18
  },
  card: {
    marginLeft: 20,
    marginRight: 20
  },
  fondo: {
    backgroundColor: '#9ed7f3'
  },
  title1: {
    color: 'black'
  },
  cardItem: {
    color: '#812b80'
  },
  color2: {
    color: 'white'
  },
  cardItem2: {
    backgroundColor: '#8FB548'
  }
});
