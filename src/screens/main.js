import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { theme } from '../common/theme';
import { colors } from '../common/colors';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';
import { images } from '../common/images';
import HomeScreen from './home';
import Invites from './invites';
import Notifications from './notification';
import UserProfile from './userProfile';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const width = Dimensions.get('window').width

const MainNavigator = createBottomTabNavigator(
    {
        Tab1: { screen: HomeScreen },
        Tab2: { screen: Invites },
        Tab3: { screen: Notifications },
        Tab4: { screen: UserProfile },
    },
    {
        tabBarOptions: {
            activeTintColor: colors.GREEN,
            inactiveTintColor: 'gray',
            style: {
                padding: 2,
            },
        },
    },
);

export default class MainScreen extends Component {

    render() {
        return (
            <View style={theme.container}>

                <MainNavigator />

                <LinearGradient
                    colors={['transparent', colors.PURPLE]}
                    start={[1, 0]} end={[1, 1]}
                    style={styles.gradientView}
                >
                    <View style={styles.iconView}>
                        <MaterialCommunityIcons
                            name="home-outline"
                            size={24}
                            style={styles.icon}
                            color={colors.GREY}
                        />
                        <MaterialCommunityIcons
                            name="bell-ring-outline"
                            size={24}
                            style={styles.icon}
                            color={colors.GREY}
                        />
                        <Image source={images.group} style={styles.groupImg} />
                        <MaterialCommunityIcons
                            name="email-outline"
                            size={24}
                            style={styles.icon}
                            color={colors.GREY}
                        />
                        <EvilIcons
                            name="user"
                            size={29}
                            style={styles.icon}
                            color={colors.GREY}
                        />
                    </View>
                </LinearGradient>
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
    gradientView: {
        width: width,
        height: p(100),
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'flex-end',
        paddingBottom: p(15)
    },
    iconView: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    roundBtn: {
        width: p(40),
        height: p(40),
        borderRadius: p(20),
        backgroundColor: colors.SKY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    groupImg: {
        width: 60,
        height: 60,
    }
});
