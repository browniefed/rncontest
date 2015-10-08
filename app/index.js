var React = require('react-native');
var Images = require('./images');

var {
    View,
    Image,
    Text,
    Navigator,
    StyleSheet,
    TouchableOpacity
} = React;

var data = require('../reactive2015.json');
var List = require('../schedule/list');
var Profile = require('../profile/profile');
var Egg = require('../easter/egg');

var routes = {
    list: {
        component: List,
        index: 0,
        props: {
            data: data
        }
    },
    profile: {
        component: Profile,
        index: 1
    }
}

var App = React.createClass({
    getInitialState: function() {
        return {
            easter : false 
        };
    },
    renderScene: function(route, navigator) {
        var Component = route.component;

        return (
            <Component 
                {...route.props}
                popToRoute={this.popToRoute}
                goBack={this.goBack}
            />
        );
    },
    goBack: function() {
        this.refs.navigator.pop();
    },
    popToRoute: function(route, props) {
        this.refs.navigator.push({...routes[route], props: props});
    },
    getEaster: function() {
        return this.state.easter ? <Egg onClose={this.handleClose}/> : <View />;
    },
    handleClose: function() {
        this.setState({
            easter: false
        });
    },
    showVjeux: function() {
        this.setState({
            easter: true
        })
    },
    render: function() {
        return (
            <View style={styles.background}>
                <TouchableOpacity onLongPress={this.showVjeux}>
                    <View style={[styles.center, styles.header]}>
                        <Image source={require('image!logo')} style={{height: 30}} resizeMode="contain"/>
                    </View>
                </TouchableOpacity>
                <View style={styles.appContainer}>
                    <Navigator
                        ref="navigator"
                        initialRoute={routes.list}
                        renderScene={this.renderScene}
                    />
                </View>
                {this.getEaster()}
            </View>
        )
    }
});

var styles = StyleSheet.create({
    background: {
        backgroundColor: '#0f1726',
        flex: 1
    },
    center: {
        alignItems: 'center'
    },
    header: {
        marginTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#1BD982',
        borderBottomWidth: 1
    },
    appContainer: {
        flex: 1
    }
})

module.exports = App;

//button colors #1BD982