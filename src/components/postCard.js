import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { p } from '../common/normalize';
import { colors } from '../common/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default class PostCard extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.row}>
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
                            {item.group && ' in '}
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
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2, marginRight: p(6) }}>
                                <Image
                                    source={{ uri: item.photogroup[0] }}
                                    style={styles.photo}
                                />
                            </View>
                            <View style={{ flex: 1, marginLeft: p(6) }}>
                                <Image
                                    source={{ uri: item.photogroup[1] }}
                                    style={[styles.photo, { height: p(65) }]}
                                />
                                <Image
                                    source={{ uri: item.photogroup[2] }}
                                    style={[styles.photo, { height: p(65) }]}
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
        );
    }
}

const styles = StyleSheet.create({
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
