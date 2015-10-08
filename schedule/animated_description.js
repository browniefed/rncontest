var React = require('react-native');

var {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    LayoutAnimation
} = React;

var AnimatedDescription = React.createClass({
    getInitialState: function() {
        return {
            open : false 
        };
    },
    toggleOpen: function() {
        var open = !this.state.open;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({
            open : open
        });
    },            
    getStyle: function() {
        if (!this.state.open) {
            return {
                height: 40,
                overflow: 'hidden'
            }
        }
        return {
            flex: 1
        }
    },
    render: function() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.outerRow}>
                        <View style={styles.row}>
                            <Image source={this.props.image} style={styles.listImage}/>
                            <Text style={[styles.text, styles.textSpeaker]}>{this.props.title}</Text>
                        </View>
                        <Text style={[styles.text, styles.textTime]}>{this.props.time}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleOpen} style={this.getStyle()}>
                    <View>
                        <Text style={styles.text}>{this.props.summary}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
})

var styles = StyleSheet.create({
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
})

module.exports = AnimatedDescription;