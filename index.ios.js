'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  StyleSheet
} = React;

var App = require('./app/index');

var rncontest = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('rncontest', () => rncontest);
