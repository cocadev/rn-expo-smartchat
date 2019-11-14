import { colors } from '../common/colors';
import * as React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Dimensions, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import UserProfile from './userProfile';
import Notifications from './notification';
import Home from './home';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../common/images';
import Invites from './invites';

const width = Dimensions.get('window').width

export default class MainScreen extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: images.home },
            { key: 'notifications', title: 'Notifications', icon: images.notifications },
            { key: 'invite', title: 'Invite', icon: images.invite },
            { key: 'profile', title: 'Profile', icon: images.profile },
        ],
    };

    handleIndexChange = (index) =>
        this.setState({
            index,
        });

    renderTabBar = (props) => (
        <LinearGradient
            colors={['transparent', colors.PURPLE]}
            start={[1, 0]} end={[1, 1]}
            style={styles.gradientView}
        >
            <View style={styles.tabbar}>
                <TouchableWithoutFeedback
                    onPress={() => props.jumpTo("home")}
                >
                    <Animated.View style={styles.item}>
                        <Image source={images.home} style={[styles.cateogryImg, this.state.index == 0 && styles.cateogryImg2]} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={() => props.jumpTo("notifications")}
                >
                    <Animated.View style={styles.item}>
                        <Image source={images.notifications} style={[styles.cateogryImg, this.state.index == 1 && styles.cateogryImg2]} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={styles.item}>
                        <Image source={images.group} style={styles.groupImg} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={() => props.jumpTo("invite")}
                >
                    <Animated.View style={styles.item}>
                        <Image source={images.invite} style={[styles.cateogryImg, this.state.index == 2 && styles.cateogryImg2]} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={() => props.jumpTo("profile")}
                >
                    <Animated.View style={styles.item}>
                        <Image source={images.profile} style={[styles.cateogryImg, this.state.index == 3 && styles.cateogryImg2]} />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>

        </LinearGradient>
    );

    renderScene = SceneMap({
        home: Home,
        notifications: Notifications,
        invite: Invites,
        profile: UserProfile,
    });

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this.renderScene}
                renderTabBar={this.renderTabBar}
                tabBarPosition="bottom"
                onIndexChange={this.handleIndexChange}
                style={{ backgroundColor: '#fff'}}
            />
        );
    }
}

const styles = StyleSheet.create({
    gradientView: {
        width: width,
        height: p(100),
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        paddingBottom: p(15),
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    tabbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
    cateogryImg: {
        width: 24,
        height: 24
    },
    cateogryImg2: {
        width: 28,
        height: 28
    },
    groupImg: {
        width: 60,
        height: 60
    }
});
