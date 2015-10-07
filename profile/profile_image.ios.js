var React = require('react-native');
var Dimensions = require('Dimensions');
var AnimatedText = require('./animated_text');

var {
    width: deviceWidth,
    height: deviceHeight
} = Dimensions.get('window');

var {
    Image,
    View,
    Text,
    StyleSheet
} = React;

var ReactNativeArt = require('ReactNativeART');

var {
    Surface
} = ReactNativeArt;

var ProfileImage = React.createClass({
    render: function() {
        return (
            <View style={this.props.style}>
                <Image style={styles.image} source={this.props.image}/>
                <Surface width={deviceWidth} height={254} style={styles.scribble}>
                    <AnimatedText d={this.props.d}/>
                </Surface>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    name: {
        backgroundColor: 'rgba(0,0,0,.2)',
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 40,
        flexWrap: 'wrap',
        opacity: 1
    },
    scribble: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'transparent'
    }
});

module.exports = ProfileImage;