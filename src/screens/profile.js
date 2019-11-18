import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { p } from '../common/normalize';
import { theme } from '../common/theme';
import Header from '../components/header';

export default class Profile extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={theme.container}>
               <Header title={item.username} back dark/>
               <Image source={{ uri: item.avatar}} style={styles.avatar}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: p(70),
        height: p(70),
        borderRadius: 8,
        margin: 5
    }
});
  