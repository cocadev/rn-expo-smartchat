import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { p } from '../common/normalize';
import { colors } from '../common/colors';
import { Actions } from 'react-native-router-flux';

export default class ProfileScreen extends Component {
    render() {
        const { title, leftElement, rightElement, back, dark } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.icon}>
                    {leftElement}
                    {
                        back &&
                        <Ionicons
                            name="md-arrow-back" 
                            size={p(18)}
                            onPress={()=>Actions.pop()}
                        />
                    }
                </View>
                <Text style={[styles.text, dark && { color: colors.DARK }]}>
                    {title}
                </Text>
                <View style={[styles.icon, { alignItems: 'flex-end' }]}>
                    {rightElement}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        alignItems: 'center',
        paddingTop: 12,
        flexDirection: "row",
        marginHorizontal: 20,
        // backgroundColor: 'yellow'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        paddingTop: 3,
        color: colors.WHITE
    },
    icon: {
        width: p(20),
    }
});
