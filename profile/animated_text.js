'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Animated
} = React;

var ReactART = require('ReactNativeART');

var {
  Shape
} = ReactART;

var MetricsPath = require('art/metrics/path');

var AnimatedShape = Animated.createAnimatedComponent(Shape);

var AnimatedText = React.createClass({
  getInitialState: function() {
    return {value: 0, fill: 'rgba(0,0,0,0)', opacity: new Animated.Value(0)};
  },
  componentWillMount: function() {
    this._metricsPath = new MetricsPath(this.props.d);
    this._interpolateColor = this.state.opacity.interpolate({
        inputRange: [0,1],
        outputRange: ['rgba(0,0,0,0)', 'rgba(255,255,255,1)']
    })
  },
  componentDidMount: function() {
    this._animateEntrance();
  },

  _animateEntrance: function() {
    requestAnimationFrame(() => {
      this.setState({value: this.state.value + 7});
      // This is some random number that I guessed to be the length of the Shape
      if (this.state.value <= this._metricsPath.length) {
        !this._unmounted && requestAnimationFrame(this._animateEntrance);
      } 
      if (this.state.fill == 'rgba(0,0,0,0)' && (Math.ceil(this.state.value) >= Math.ceil(this._metricsPath.length/8)) ) {
        Animated.timing(this.state.opacity, {
            duration: 300,
            toValue: 1
        }).start();
      }
    });
  },
  componentWillUnmount: function() {
    this._unmounted = true;
  },

  render: function() {

    return (
        <AnimatedShape 
            x={10}
            y={40}
            d={this.props.d}
            stroke="#000" 
            fill={this._interpolateColor}
            strokeDash={[this.state.value,this._metricsPath.length]}
            strokeWidth={1} 
        />
    );
  }
});


module.exports = AnimatedText;
