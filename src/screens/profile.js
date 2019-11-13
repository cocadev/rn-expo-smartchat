import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { p } from '../common/normalize';
import { colors } from '../common/colors';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Ionicons name="md-settings" size={p(18)}/>
               <Text style={styles.text}> App </Text>
               <Ionicons name="md-send" size={p(18)}/>
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
  