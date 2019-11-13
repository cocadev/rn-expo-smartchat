import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { p } from '../common/normalize';
import { colors } from '../common/colors';
import { Actions } from 'react-native-router-flux';

export default class ProfileScreen extends Component {
    render() {
        const { title, leftElement, rightElement, back } = this.props;
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
        marginHorizontal: p(8),
        width: p(16)
    }
});
