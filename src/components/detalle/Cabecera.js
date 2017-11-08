import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {Header, Left, Icon, Body, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';
import image from '../../assets/imgs/image.png';

export default class Cabecera extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' style={styles.color}/>
          </TouchableOpacity>
          </Left>
          <Body/>
          <Right>
          <View style={styles.view}>
            <Image style={styles.img} source={image}/>
          </View>
          </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#802154',
  },
  color: {
    color: "white",
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10
  },
img: {
    width: 90,
    height: 50
  }
});