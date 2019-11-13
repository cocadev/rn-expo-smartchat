import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';
import { theme } from '../common/theme';
import { MESSAGES } from '../common/fakeDB';
import { colors } from '../common/colors';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, EvilIcons, Ionicons } from '@expo/vector-icons';
import Header from '../components/header';

const width = Dimensions.get('window').width

export default class HomeScreen extends Component {
    _renderItem = ({ item, index }) => (
        <View style={styles.row} key={index}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: item.avatar }}
                    style={styles.avatar}
                />
                <View style={{ flex: 1, marginLeft: p(10) }}>
                    <Text style={styles.titleText}>
                        {item.username}
                    </Text>
                    <Text style={styles.timeText}>
                        {item.timeago}
                        {item.group && ' in'}
                        <Text style={[styles.timeText, { color: colors.SKY }]}>
                            {item.group}
                        </Text>
                    </Text>
                </View>
                <Ionicons
                    name="ios-more"
                    size={p(18)}
                    style={[styles.icon, { marginRight: p(3) }]}
                    color={colors.DARKGREY}
                />
            </View>
            <View style={{ marginLeft: p(40) }}>
                {
                    item.description &&
                    <Text style={styles.normalText}>
                        {item.description}
                    </Text>
                }
                {
                    item.photo &&
                    <Image
                        source={{ uri: item.photo }}
                        style={styles.photo}
                    />
                }
                {
                    item.photogroup &&
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{ flex: 2, marginRight: p(6) }}>
                            <Image
                                source={{ uri: item.photogroup[0] }}
                                style={styles.photo}
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: p(6) }}>
                            <Image
                                source={{ uri: item.photogroup[1] }}
                                style={[styles.photo, { height: p(65)}]}
                            />
                            <Image
                                source={{ uri: item.photogroup[2] }}
                                style={[styles.photo, { height: p(65)}]}
                            />
                        </View>
                    </View>
                }
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons
                        name="message-reply"
                        size={p(15)}
                        style={styles.icon}
                        color={colors.DARKGREY}
                    />
                    <Text style={styles.greyText}>
                        {item.responses} Responses
                    </Text>
                    <MaterialCommunityIcons
                        name="crown"
                        size={p(18)}
                        style={styles.icon}
                        color={item.fav ? colors.YELLOW : colors.DARKGREY}
                    />
                </View>
            </View>
        </View>
    )
    render() {
        return (
            <View style={theme.container}>
                <Header />
                <FlatList
                    style={{ backgroundColor: '#fff' }}
                    data={MESSAGES}
                    keyExtractor={(item, i) => String(i)}
                    renderItem={this._renderItem}
                    numColumns={1}
                    ListFooterComponent={<View style={{ height: p(80) }} />}
                />
                <LinearGradient
                    colors={['transparent', colors.PURPLE]}
                    start={[1, 0]} end={[1, 1]}
                    style={styles.gradientView}
                >
                    <View style={styles.iconView}>
                        <MaterialCommunityIcons name="home-outline" size={p(18)} style={styles.icon} color={colors.DARKGREY} />
                        <MaterialCommunityIcons name="bell-ring-outline" size={p(18)} style={styles.icon} color={colors.DARKGREY} />
                        <View style={styles.roundBtn}>
                            <MaterialCommunityIcons name="plus" size={p(22)} style={styles.icon} color={colors.WHITE} />
                        </View>
                        <MaterialCommunityIcons name="email-outline" size={p(18)} style={styles.icon} color={colors.DARKGREY} />
                        <EvilIcons name="user" size={p(20)} style={styles.icon} color={colors.DARKGREY} />
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
    row: {
        paddingVertical: p(12),
        paddingHorizontal: p(8),
        borderBottomWidth: 4,
        borderBottomColor: colors.GREY
    },
    avatar: {
        width: p(30),
        height: p(30),
        borderRadius: p(16)
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
    titleText: {
        fontSize: p(11),
        fontFamily: 'Montserrat-Medium'
    },
    timeText: {
        fontSize: p(9),
        fontFamily: 'Montserrat-Regular',
        color: colors.DARKGREY
    },
    normalText: {
        fontSize: p(11),
        fontFamily: 'Montserrat-Regular',
    },
    greyText: {
        color: colors.DARKGREY,
        fontSize: p(10),
        marginLeft: p(3),
        flex: 1
    },
    photo: {
        width: '100%',
        height: p(140),
        borderRadius: p(12),
        marginVertical: p(6),
        backgroundColor: colors.DARKGREY,
        resizeMode: 'cover'
    }
});
