import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux'
import { updateAuthor } from './redux/modules/author'
import Header from '../components/Header'
import AlbumList from '../components/AlbumList'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(updateAuthor());
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

function mapStateToProps({author},props) {
  return {
    author,
    ...props
  }
}
export default connect(mapStateToProps)(App);