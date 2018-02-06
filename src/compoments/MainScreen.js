import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import '../compoments/getTemp'; 
import getTemp from '../compoments/getTemp'
import { connect } from 'react-redux';
import {startFetchData, fetchSuccess, fetchError} from '../redux/actionCreators2';

class MainScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityName: ''
        };
    }

    getWeatherMessage(){
        const { error, isLoading, cityName, temp } = this.props;
        if(isLoading) return '...Loading';
        if (error) return 'Vui long thu lai';
        if (!cityName) return 'Nhap ten thanh pho cua ban!';
        return `${cityName}`;

    }

    getTempCity(){
        // this.props.startFetchData();
        // getTemp()
        // .then(temp => this.props.fetchSuccess())
        // .catch(err => this.props.fetchError());

        this.props.getFetchTemp();
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.message}>{this.getWeatherMessage()}</Text>
                <TextInput
                    style={styles.textInput} 
                    value={this.state.cityName}
                    onChangeText={text => this.setState({cityName: text})}
                />
                <TouchableOpacity style={styles.button} onPress={this.getTempCity.bind(this)}>
                    <Text style={styles.message}>Lấy nhiệt độ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state){
    return { 
        cityName: state.cityName, 
        text: state.temp,
        error: state.error,
        isLoading: state.isLoading
    };
}

 const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
         flex: 1,
         alignSelf: 'stretch',
         justifyContent: 'center',
         alignItems: 'center',
    },
    message: {
        color: '#fff',
        fontSize: 30
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
         margin: 50
    },
    textInput: {
        margin: 10,
        backgroundColor: 'red',
        height: 40,
        width: 100,
         paddingHorizontal: 10,
        color: 'black',
    }
 })

 export default connect(mapStateToProps, {startFetchData, fetchSuccess, fetchError})(MainScreen);