var React = require('react-native');
var _ = require('lodash');


var Images = require('../app/images');
var AnimatedDescription = require('./animated_description');

var {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    LayoutAnimation
} = React;


var List = React.createClass({
    handlePress: function(value, id) {
        this.props.popToRoute('profile', {...value, id: id});   
    },
    renderSection: function(sections) {
        return (
            <View>
                <View style={styles.infoRow}>
                    <Text style={[styles.text, styles.dayTitle]}>{sections.title}</Text>
                </View>
                <View>
                    {_.map(sections.slots, this.renderRow, this)}
                </View>
            </View>
        )
    },
    renderRow: function(value) {

        if (value.id) {
            return (
                <AnimatedDescription 
                    image={Images.getImage(value.id)}
                    onPress={this.handlePress.bind(this, this.props.data.speakers[value.id], value.id)} 
                    {...value}
                />
            )
        }

        return (
            <View style={[styles.outerRow, styles.infoRow]}>
                <Text style={[styles.text, styles.textInfo]}>{value.title}</Text>
            </View>
        );
        
    },
    render: function() {
        return (
            <ScrollView style={styles.container}>
                {
                    _.map(this.props.data.schedule, this.renderSection, this)
                }
            </ScrollView>
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    infoRow: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1BD982',
    },
    dayTitle: {
        fontSize: 30,
    },
    outerRow: {
        marginTop: 10,
        marginBottom: 10
    },
    row: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 70,
        height: 50,
    },
    text: {
        color: '#FFF'
    },
    textSpeaker: {
        fontWeight: 'bold',
        fontSize: 16
    },
    textInfo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textTime: {
        paddingLeft: 5
    },
    listImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#1BD982',
        position: 'absolute',
        left: 10,
        top: 0
    }
});

module.exports = List;