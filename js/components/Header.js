import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'


export default class Header extends React.Component {
  render() {
    return <View style={[styles.wrapper, { elevation: 3 }]}>
        <Text style={styles.content}>{this.props.children}</Text>
      </View>
  }
}

const styles=StyleSheet.create({
    wrapper:{
     height:60,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#f8f8f8',
    },
    content:{
     fontSize:20
    }
})