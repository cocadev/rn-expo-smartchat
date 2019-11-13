import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { p } from '../common/normalize';
import { theme } from '../common/theme';
import Header from '../components/header';

export default class Profile extends Component {
    render() {
        console.log('************', this.props)
        return (
            <View style={theme.container}>
               <Header title={this.props.item.username} back/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});
  