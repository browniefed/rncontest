var React = require('react-native');

var {
    Text,
    StyleSheet
} = React;

var EggText = React.createClass({
    render: function() {
        return (
            <Text style={styles.text}>Christopher Chedeau</Text>
        )
    }
})

var styles = StyleSheet.create({
    text: {
        backgroundColor: 'transparent',
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        transform: [
            {rotate: '-30deg'}
        ],
        position: 'absolute',
        bottom: 120,
        right: 50
    },
})

module.exports = EggText;