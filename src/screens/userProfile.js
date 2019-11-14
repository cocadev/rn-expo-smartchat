import React, { Component } from 'react';
import { View } from 'react-native';
import { theme } from '../common/theme';
import Header from '../components/header';

export default class UserProfile extends Component {
    render() {
        return (
            <View style={theme.container}>
               <Header title={'User Profile'} />
            </View>
        );
    }
}