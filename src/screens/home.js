import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { theme } from '../common/theme';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={theme.container}>
               <Text> This is comming soon!</Text>
            </View>
        );
    }
}