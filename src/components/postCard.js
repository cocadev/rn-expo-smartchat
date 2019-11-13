import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { p } from '../common/normalize';
import { colors } from '../common/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { images } from '../common/images';

export default class PostCard extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.row}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.props.onGoToProfile}>
                        <Image
                            source={{ uri: item.avatar }}
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1, marginLeft: 10 }}>
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
                    <Image source={images.dots} style={{ marginTop: 15 }} />
                </View>
                <View style={{ marginLeft: 47 }}>
                    {
                        item.description &&
                        <Text style={styles.normalText}>
                            {item.description}
                        </Text>
                    }
                    {
                        item.notice &&
                        <View style={styles.notice}>
                            <Text style={styles.noticeText}>{item.notice}</Text>
                        </View>
                    }
                    {
                        item.photo &&
                        <Image
                            source={{ uri: item.photo }}
                            style={styles.bigPhoto}
                        />
                    }
                    {
                        item.website && item.website.title &&
                        <View style={styles.website}>
                            <Image source={{ uri: item.website.image}} style={styles.webImg}/>
                            <Text style={styles.webTitle}>{item.website.title}</Text>
                            <Text style={styles.webContent}>{item.website.content}</Text>
                            <Text style={styles.webUrl}>{item.website.url}</Text>
                        </View>
                    }
                    {
                        item.photogroup &&
                        <View style={{ flexDirection: 'row', marginTop: 17 }}>
                            <View style={{ flex: 2, marginRight: 0 }}>
                                <Image
                                    source={{ uri: item.photogroup[0] }}
                                    style={styles.photo}
                                />
                            </View>
                            <View style={{ flex: 1, marginLeft: 7 }}>
                                <Image
                                    source={{ uri: item.photogroup[1] }}
                                    style={styles.photo2}
                                />
                                <Image
                                    source={{ uri: item.photogroup[2] }}
                                    style={styles.photo2}
                                />
                            </View>
                        </View>
                    }
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={images.chat}
                            style={styles.chatImg}
                        />
                        <Text style={styles.greyText}>
                            {item.responses} Responses
                        </Text>
                        <MaterialCommunityIcons
                            name="crown"
                            size={p(18)}
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
        paddingVertical: 16,
        paddingRight: 18,
        paddingLeft: 15,
        borderBottomWidth: 2,
        borderBottomColor: colors.GREY
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18
    },
    titleText: {
        fontSize: 17,
        fontFamily: 'Montserrat-Medium',
        lineHeight: 22
    },
    timeText: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: colors.DARKGREY,
        lineHeight: 16
    },
    normalText: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        lineHeight: 20,
        marginTop: 10
    },
    greyText: {
        color: colors.DARKGREY,
        fontSize: 13,
        lineHeight: 18,
        marginLeft: 4,
        marginVertical: 14,
        flex: 1
    },
    noticeText: {
        color: colors.WHITE,
        fontSize: 20,
        fontFamily: 'Montserrat-Bold'
    },
    photo: {
        width: "100%",
        height: 155,
        borderRadius: 20,
        backgroundColor: colors.GREY7,
        resizeMode: 'cover'
    },
    photo2: {
        width: "100%",
        height: 74,
        borderRadius: 20,
        marginBottom: 6,
        backgroundColor: colors.GREY7,
        resizeMode: 'cover'
    },
    bigPhoto: {
        width: '100%',
        height: 230,
        marginTop: 14.25,
        borderRadius: 20,
        backgroundColor: colors.GREY7,
        resizeMode: 'cover'
    },
    chatImg: {
        width: 18,
        height: 18
    },
    notice: {
        height: 230,
        width: '100%',
        backgroundColor: colors.GREEN,
        borderRadius: 20,
        marginTop: 14.25,
        paddingHorizontal: 24,
        paddingTop: 32
    },
    website: {
        height: 308,
        width: "100%",
        marginTop: 12,
        padding: 7.5,
        borderWidth: 1,
        borderColor: colors.GREY0,	
        borderRadius: 20,
        backgroundColor: colors.WHITE
    },
    webImg: {
        width: '100%',
        height: 168,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18
    },
    webTitle: {
        color: colors.DARKBLUE,
        fontSize: 18,
        lineHeight: 27,
        fontFamily: 'Montserrat-Bold',
        marginLeft: 6,
        marginTop: 11
    },
    webContent: {
        color: colors.LIGHTDARK,
        fontSize: 13,
        lineHeight: 18,
        fontFamily: 'Montserrat-Light',
        marginLeft: 6,
        marginVertical: 10
    },
    webUrl: {
        color: colors.LIGHTDARK,
        fontSize: 11,
        lineHeight: 17,
        fontFamily: 'Montserrat-Light',
        marginLeft: 6,
    }
});
