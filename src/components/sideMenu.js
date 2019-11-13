import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { theme } from '../common/theme';

export default class SideMenu extends Component {
    render() {
        return (
            <View style={theme.container}>
               <Text> Menu is comming soon!</Text>
            </View>
        );
    }
}