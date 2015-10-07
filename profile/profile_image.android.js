var React = require('react-native');

var {
    Image,
    View,
    Text,
    StyleSheet
} = React;


var ProfileImage = React.createClass({
    render: function() {
        return (
            <View style={this.props.style}>
                <Image source={this.props.image}>
                    <Text style={styles.name}>{this.props.name}</Text>
                </Image>
            </View>
        )
    }
});


var styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 40,
        flexWrap: 'wrap',
        paddingLeft: 10,
        backgroundColor: '#000',
        opacity: .8
    }
});

module.exports = ProfileImage;