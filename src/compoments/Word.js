import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { memorized, show } from '../redux/actionCreators';


class Word extends Component {

    render() {
        const { en, vn, memorized, isShow, id } = this.props.myword;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtonText = memorized ? 'forget' : 'memorized';
        const meaning = isShow ? vn : '------';
        return (
            <View style={styles.container}>
                <Text style={{ textDecorationLine }}>{en}</Text>
                <Text>{meaning}</Text>
                <View style={styles.controller}>
                    <TouchableOpacity onPress={() => this.props.memorized(id)}>
                        <Text>{memorizedButtonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.show(id)}>
                        <Text>show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C5C5C5',
        padding: 10,
        margin: 10
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    }
});

export default connect(null, {memorized, show})(Word);