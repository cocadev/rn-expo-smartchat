import { colors } from '../common/colors';
import * as React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Dimensions, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import Albums from './userProfile';
import Article from './invites';
import Chat from './notification';
import Contacts from './home';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../common/images';

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

    renderItem = () => ({ route, index }) => {
        return (
            <View style={styles.tab} key={index}>
                <Animated.View style={styles.item}>
                    <Image source={route.icon} style={styles.cateogryImg} />
                </Animated.View>
            </View>
        );
    };

    renderTabBar = (props) => (
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
        home: Contacts,
        notifications: Albums,
        invite: Article,
        profile: Chat,
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
    tab: {
        flex: 1,
        alignItems: 'center',
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
        alignItems: 'flex-end'
    },
    cateogryImg: {
        width: 30,
        height: 30
    }
});
