var React = require('react-native');
var Dimensions = require('Dimensions');
var ReactNativeArt = require('ReactNativeART');
var EggText = require('./egg_text');

var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

var {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Animated
} = React;

var {
    Surface,
    Shape
} = ReactNativeArt;


var Egg = React.createClass({
    getInitialState: function() {
        return {
            scale: new Animated.Value(0) 
        };
    },
    componentDidMount: function() {
        Animated.spring(this.state.scale, {
            toValue: 1,
            friction: 3.2
        }).start();
    },
    render: function() {
        return (
            <View style={styles.cover}>
                <Animated.Image 
                    key="vjeux"
                    source={require('image!vjeux')} 
                    style={[
                            styles.cover, 
                            {width: deviceWidth, height: deviceHeight}, 
                            {
                                transform: [
                                    {scaleX: this.state.scale},
                                ]
                            }
                          ]} 
                    resizeMode="cover"
                >
                    <EggText />
                </Animated.Image>
                <TouchableOpacity onPress={this.props.onClose} style={styles.closeContainer}>
                    <View>
                        <Text style={styles.closeButton}>X</Text>
                    </View>
                </TouchableOpacity>
                   
            </View>
        )
    }
});


var styles = StyleSheet.create({
    cover: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flex: 1
    },
    closeContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    closeButton: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

module.exports = Egg;