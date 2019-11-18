import * as React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Dimensions, Image, Modal, FlatList, Text, Animated, Easing } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../common/images';
import { colors } from '../common/colors';
import UserProfile from './userProfile';
import Notifications from './notification';
import Home from './home';
import Invites from './invites';

const width = Dimensions.get('window').width

const MODALIST = [
    'Text', 'Link', 'Image', 'Gif'
]

export default class MainScreen extends React.Component {

    state = {
        index: 0,
        showModal: false,
        routes: [
            { key: 'home', title: 'Home' },
            { key: 'notifications', title: 'Notifications' },
            { key: 'invite', title: 'Invite' },
            { key: 'profile', title: 'Profile' },
        ],
        spinAnim: new Animated.Value(0),
    };

    animationRotate(){
        Animated.timing(
            this.state.spinAnim,
            {
                toValue: 1, 
                duration: 200,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start();

    }

    _renderImg = ({ item }) => (
        <View style={{ marginBottom: 43 }}>
            <Image source={images.group} style={styles.modalIcon} />
            <Text style={styles.text1}>{item}</Text>
        </View>
    )

    renderModal() {
        const spin = this.state.spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        });
        return (
            <Modal
                visible={this.state.showModal}
                transparent={true}
                onRequestClose={() => this.closeModal()}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <View style={{ paddingBottom: 80, position: 'absolute' }}>
                            <FlatList
                                data={MODALIST}
                                keyExtractor={(item, i) => String(i)}
                                renderItem={this._renderImg}
                                numColumns={2}
                            />
                        </View>
                        <TouchableWithoutFeedback onPress={() => this.onModal()}>
                            <Animated.View style={styles.item}>
                                <Animated.Image source={images.group} style={[styles.groupImg, { transform: [{ rotate: spin }]}]} />
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Modal>
        );
    }
    onModal() {
        this.animationRotate()
        this.setState({ showModal: !this.state.showModal })
    }
    handleIndexChange = (index) =>
        this.setState({
            index,
        });

    buttonIcon(props, goto, icon1, k) {
        return (
            <TouchableWithoutFeedback onPress={() => props.jumpTo(goto)}>
                <Animated.View style={styles.item}>
                    <Image
                        source={icon1}
                        style={[
                            goto == 'notifications'
                                ? styles.cateogryImg2
                                : (
                                    goto == 'profile'
                                        ? styles.cateogryImg3
                                        : styles.cateogryImg
                                ),
                            this.state.index !== k &&
                            { opacity: 0.5 }
                        ]}
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }

    renderTabBar = (props) => {
        return (
            <LinearGradient
                colors={['transparent', colors.PURPLE]}
                start={[1, 0]} end={[1, 1]}
                style={styles.gradientView}
            >
                <View style={styles.tabbar}>

                    {this.buttonIcon(props, "home", images.home, 0)}
                    {this.buttonIcon(props, "notifications", images.notifications, 1)}

                    <TouchableWithoutFeedback onPress={() => this.onModal()}>
                        <View style={styles.item}>
                            <Animated.Image
                                source={images.group}
                                style={[styles.groupImg, {
                                    transform: [{ rotate: '0 deg' }]
                                }]}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                    {this.buttonIcon(props, "invite", images.invite, 2)}
                    {this.buttonIcon(props, "profile", images.profile, 3)}

                </View>

            </LinearGradient>
        )
    };

    renderScene = SceneMap({
        home: Home,
        notifications: Notifications,
        invite: Invites,
        profile: UserProfile,
    });

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabView
                    navigationState={this.state}
                    renderScene={this.renderScene}
                    renderTabBar={this.renderTabBar}
                    tabBarPosition="bottom"
                    onIndexChange={this.handleIndexChange}
                    style={{ backgroundColor: '#fff' }}
                />
                {this.renderModal()}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    gradientView: {
        width: width,
        height: 155,
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
        height: 24,
    },
    cateogryImg2: {
        width: 24,
        height: 26,
    },
    cateogryImg3: {
        width: 26,
        height: 26
    },
    groupImg: {
        width: 60,
        height: 60,
    },
    modalContainer: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "flex-end",
    },
    modal: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        backgroundColor: colors.LIGHTPURPLE,
        position: 'absolute',
        bottom: 0,
        paddingBottom: p(15),
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    text1: {
        color: colors.WHITE,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        marginTop: 5
    },
    modalIcon: {
        width: 48,
        height: 48,
        marginHorizontal: 25
    }
});
