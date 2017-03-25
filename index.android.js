/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Header from './js/components/Header'
import AlbumList from './js/components/AlbumList'

export default class AwesomeProject extends Component {
  componentWillMount(){
    console.log('hello')
    //http://rallycoding.herokuapp.com/api/music_albums
    debugger;
  }

  render() {
      return <View>
        <Header>
            Albums
        </Header>
        <AlbumList/>
        </View>
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
