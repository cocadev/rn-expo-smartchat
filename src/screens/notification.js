import React, { Component } from 'react';
import { View } from 'react-native';
import { theme } from '../common/theme';
import Header from '../components/header';

export default class Notifications extends Component {
    render() {
        return (
            <View style={theme.container}>
                <View style={{ marginTop: 13 }}></View>
               <Header title={'Notifications'} dark/>
            </View>
        );
    }
}