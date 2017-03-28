	import React, { Component } from 'react';
	import {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  View
	} from 'react-native';

	import Pin from './app/components/Pin'

	export default class projetoLayout extends Component {
	  render() {
	    return (
	      <View style={styles.container}>
			  <Pin />
	      </View>
	    );
	  }
	}

	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	  }
	});

	AppRegistry.registerComponent('projetoLayout', () => projetoLayout);
