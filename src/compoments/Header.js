import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding } from '../redux/actionCreators';

 class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text />
                <Text> MY WORDS</Text>
                <TouchableOpacity onPress={() => this.props.mytoggleIsAdding()}>
                    <Text>+</Text>
                </TouchableOpacity>    
            </View>
        );
    }
}

export default connect(null, {mytoggleIsAdding: toggleIsAdding })(Header);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})