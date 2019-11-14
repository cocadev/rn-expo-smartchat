// import React, { Component } from 'react';
// import { View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
// import { theme } from '../common/theme';
import { colors } from '../common/colors';

// import { MaterialCommunityIcons, EvilIcons, Ionicons } from '@expo/vector-icons';
// import Header from '../components/header';
// import { images } from '../common/images';
// import HomeScreen from './home';
// import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
// import Invites from './invites';


// export default class MainScreen extends Component {

//     render() {
//         return (
//             <View style={theme.container}>

//                 <HomeScreen />

//                 <LinearGradient
//                     colors={['transparent', colors.PURPLE]}
//                     start={[1, 0]} end={[1, 1]}
//                     style={styles.gradientView}
//                 >
//                     <View style={styles.iconView}>
//                         <MaterialCommunityIcons
//                             name="home-outline"
//                             size={24}
//                             style={styles.icon}
//                             color={colors.GREY}
//                         />
//                         <MaterialCommunityIcons
//                             name="bell-ring-outline"
//                             size={24}
//                             style={styles.icon}
//                             color={colors.GREY}
//                         />
//                         <Image source={images.group} style={styles.groupImg} />
//                         <MaterialCommunityIcons
//                             name="email-outline"
//                             size={24}
//                             style={styles.icon}
//                             color={colors.GREY}
//                         />
//                         <EvilIcons
//                             name="user"
//                             size={29}
//                             style={styles.icon}
//                             color={colors.GREY}
//                         />
//                     </View>
//                 </LinearGradient>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         height: p(50),
//         alignItems: 'center',
//         paddingTop: p(12),
//         flexDirection: "row",
//         borderBottomColor: colors.GREY,
//         borderBottomWidth: 4
//     },
//     gradientView: {
//         width: width,
//         height: p(100),
//         zIndex: 1,
//         position: 'absolute',
//         bottom: 0,
//         justifyContent: 'flex-end',
//         paddingBottom: p(15)
//     },
//     iconView: {
//         flexDirection: 'row',
//         width: width,
//         justifyContent: 'space-around',
//         alignItems: 'center'
//     },
//     roundBtn: {
//         width: p(40),
//         height: p(40),
//         borderRadius: p(20),
//         backgroundColor: colors.SKY,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     groupImg: {
//         width: 60,
//         height: 60,
//     }
// });

import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native';
import {
    TabView,
    SceneMap,
    NavigationState,
    SceneRendererProps,
} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import Albums from './userProfile';
import Article from './invites';
import Chat from './notification';
import Contacts from './home';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
const width = Dimensions.get('window').width

export default class MainScreen extends React.Component {
    // eslint-disable-next-line react/sort-comp
    static title = 'Custom tab bar';
    static backgroundColor = '#fafafa';
    static tintColor = '#263238';
    static appbarElevation = 4;
    static statusBarStyle = 'dark-content'

    state = {
        index: 0,
        routes: [
            { key: 'contacts', title: 'Contacts', icon: 'ios-people' },
            { key: 'albums', title: 'Albums', icon: 'ios-albums' },
            { key: 'article', title: 'Article', icon: 'ios-paper' },
            { key: 'chat', title: 'Chat', icon: 'ios-chatboxes' },
        ],
    };

    handleIndexChange = (index) =>
        this.setState({
            index,
        });

    renderItem = ({
        navigationState,
        position,
    }) => ({ route, index }) => {
        const inputRange = navigationState.routes.map((_, i) => i);

        const activeOpacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });
        const inactiveOpacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map((i) => (i === index ? 0 : 1)),
        });

        return (
            <View style={styles.tab}>
                <Animated.View style={[styles.item, { opacity: inactiveOpacity }]}>
                    <Ionicons
                        name={route.icon}
                        size={26}
                        style={[styles.icon, styles.inactive]}
                    />
                    <Text style={[styles.label, styles.inactive]}>{route.title}</Text>
                </Animated.View>
                <Animated.View
                    style={[styles.item, styles.activeItem, { opacity: activeOpacity }]}
                >
                    <Ionicons
                        name={route.icon}
                        size={26}
                        style={[styles.icon, styles.active]}
                    />
                    <Text style={[styles.label, styles.active]}>{route.title}</Text>
                </Animated.View>
            </View>
        );
    };

    renderTabBar = (
        props
    ) => (
            // <View style={styles.tabbar}>
            <LinearGradient
                colors={['transparent', colors.PURPLE]}
                start={[1, 0]} end={[1, 1]}
                style={styles.gradientView}
            >
                {props.navigationState.routes.map((route, index) => {
                    return (
                        <TouchableWithoutFeedback
                            key={route.key}
                            onPress={() => props.jumpTo(route.key)}
                        >
                            {this.renderItem(props)({ route, index })}
                        </TouchableWithoutFeedback>
                    );
                })}
            </LinearGradient>
        );

    renderScene = SceneMap({
        contacts: Contacts,
        albums: Albums,
        article: Article,
        chat: Chat,
    });

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this.renderScene}
                renderTabBar={this.renderTabBar}
                tabBarPosition="bottom"
                onIndexChange={this.handleIndexChange}
            />
        );
    }
}

const styles = StyleSheet.create({
    tabbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'green',
    },
    tab: {
        // flex: 1,
        alignItems: 'center',
        // borderTopWidth: StyleSheet.hairlineWidth,
        // borderTopColor: 'rgba(0, 0, 0, .2)',
        // backgroundColor: 'transparent'
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 4.5,
    },
    activeItem: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    active: {
        color: '#0084ff',
    },
    inactive: {
        color: '#939393',
    },
    icon: {
        height: 26,
        width: 26,
    },
    label: {
        fontSize: 10,
        marginTop: 3,
        marginBottom: 1.5,
        backgroundColor: 'transparent',
    },
    gradientView: {
        width: width,
        height: p(100),
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'flex-end',
        paddingBottom: p(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'green',
    },
});
