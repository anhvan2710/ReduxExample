import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Word from '../compoments/Word';
import Filter from '../compoments/Filter';
import Header from '../compoments/Header';
import Form from '../compoments/Form';

class Main extends Component {

    getWordList(){
        const { myFilter, myWords } = this.props;
        if (myFilter === 'MEMORIZED') return myWords.filter(e => e.memorized);
        if (myFilter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);
        return myWords;
    }

    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1 ,marginTop: 30 }}>
                {/* <Text>{this.props.myFilter}</Text> */}
                <Header />
                { this.props.myIsAdding? <Form /> : null }
                <View style={{ flex: 10 }}>
                    <FlatList
                        data={this.getWordList()}
                        renderItem={({ item }) => <Word myword={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            <Filter />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding
    };
}

export default connect(mapStateToProps)(Main);