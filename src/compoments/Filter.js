import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { showAll, showMemorized, showNeedPractice } from '../redux/actionCreators';

class Filter extends Component {

    getTextStyle(statusName){
        const { myFilterStatus } = this.props;
        console.log('sttus1: '+ myFilterStatus);
        console.log('sttus2: '+ statusName);

        if ( statusName == myFilterStatus) {
            console.log('gogo: ');
            return { color: 'red', fontWeight: 'bold'};
        } else {
        return { color: 'black' };
        }
    }

    // setFilterStatus(actionType) {
    //     this.props.dispatch({ type: actionType});
    // }


    render() {
        return (
            <View style={{ 
                backgroundColor: '#fff',
                 flexDirection: 'row', 
                 flex: 1,
                 alignItems: 'center',
                 justifyContent: 'space-around',

                 }}>
                <TouchableOpacity onPress={() => this.props.showAll()}>
                    <Text style={this.getTextStyle('SHOW_ALl')}>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.showMemorized()}>
                    <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.showNeedPractice()}>
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state){
    return { myFilterStatus: state.filterStatus };
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#C5C5C5',
        padding: 10,
        margin: 10
    }
});

export default connect(mapStateToProps, {
    showAll, showMemorized, showNeedPractice
})(Filter);