var React = require('react-native');

var ProfileImage = require('./profile_image')
var {
    Image,
    Text,
    View,
    StyleSheet
} = React;

var Images = require('../app/images');
var Paths = require('../app/paths');

var Profile = React.createClass({
    render: function() {
        return (
            <View>
                <ProfileImage 
                    d={Paths[this.props.id]}
                    image={Images.getImage(this.props.id)} 
                    name={this.props.name}
                />
                <View style={styles.container}>
                    <Text style={styles.time}>{this.props.country}</Text>
                    <Text style={styles.bio}>
                        {this.props.bio}
                    </Text>
                </View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        padding: 15
    },
    time: {
        color: '#FFF',
        fontSize: 20
    },
    bio: {
        color: '#FFF',
        fontSize: 14
    }
})
module.exports = Profile;