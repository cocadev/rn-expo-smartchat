import * as React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Dimensions, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../common/images';
import { colors } from '../common/colors';
import Animated from 'react-native-reanimated';
import UserProfile from './userProfile';
import Notifications from './notification';
import Home from './home';
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

    buttonIcon(props, goto, icon, k) {
        return (
            <TouchableWithoutFeedback onPress={() => props.jumpTo(goto)}>
                <Animated.View style={styles.item}>
                    <Image source={icon} style={[styles.cateogryImg, this.state.index == k && styles.cateogryImg2]} />
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }

    renderTabBar = (props) => (
        <LinearGradient
            colors={['transparent', colors.PURPLE]}
            start={[1, 0]} end={[1, 1]}
            style={styles.gradientView}
        >
            <View style={styles.tabbar}>
                {this.buttonIcon(props, "home", images.home, 0)}
                {this.buttonIcon(props, "notifications", images.notifications, 1)}

                <TouchableWithoutFeedback>
                    <Animated.View style={styles.item}>
                        <Image source={images.group} style={styles.groupImg} />
                    </Animated.View>
                </TouchableWithoutFeedback>

                {this.buttonIcon(props, "invite", images.invite, 2)}
                {this.buttonIcon(props, "profile", images.profile, 3)}

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
                style={{ backgroundColor: '#fff' }}
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
