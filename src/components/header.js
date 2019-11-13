import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { p } from '../common/normalize';
import { colors } from '../common/colors';

export default class ProfileScreen extends Component {
    render() {
        const { title, leftElement, rightElement } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.icon}>
                    {leftElement}
                </View>
                <Text style={styles.text}>
                    {title}
                </Text>
                <View style={styles.icon}>
                    {rightElement}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: p(50),
        alignItems: 'center',
        paddingTop: p(12),
        flexDirection: "row",
        borderBottomColor: colors.GREY,
        borderBottomWidth: 4
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: p(16),
        fontFamily: 'Montserrat-Bold'
    },
    icon: {
        marginHorizontal: p(8)
    }
});
