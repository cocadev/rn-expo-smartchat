import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../common/colors';
import { images } from '../common/images';
import { Ionicons } from '@expo/vector-icons';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/header';
import UtilService from '../common/utils';

export default class PostCard extends Component {

    render() {
        const { item } = this.props;
        return (
            <LinearGradient
                style={[styles.row, { backgroundColor: UtilService.acceptColor(item) }]}
                colors={['transparent', colors.DARKY]}
                start={[1, 0.2]} end={[1, 0]}
            >
                <Header
                    title={'Home'}
                    leftElement={(<Ionicons name="md-settings" size={p(18)} color={colors.WHITE} />)}
                    rightElement={(<Image source={images.messages} />)}
                />
                <View style={{ flexDirection: 'row', marginTop: 8, marginLeft: 29 }}>
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
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {
                        item.photo &&
                        <Image
                            source={{ uri: item.photo }}
                            style={styles.bigPhoto}
                        />
                    }
                    <View style={{ width: p(230)}}>
                        {
                            item.notice &&
                            <View style={styles.notice}>
                                <Text style={styles.noticeText}>{item.notice}</Text>
                            </View>
                        }
                        {
                            item.website && item.website.title &&
                            <View style={styles.website}>
                                <View style={styles.imageContainerIOS}>
                                    <Image source={{ uri: item.website.image }} style={styles.webImg} />
                                </View>
                                <Text style={styles.webTitle}>{item.website.title}</Text>
                                <Text style={[styles.webContent, { marginVertical: 2, marginLeft: 6 }]}>{item.website.content}</Text>
                                <Text style={styles.webUrl}>{item.website.url}</Text>
                            </View>
                        }
                        {
                            item.photogroup &&
                            <View style={{ marginTop: 16, marginLeft: 30 }}>
                                <Image
                                    source={{ uri: item.photogroup[0] }}
                                    style={[styles.photo, { height: 145}]}
                                />
                                <View style={{ flexDirection: 'row', marginTop: 7 }}>
                                    <View style={{ flex: 2, marginRight: 0 }}>
                                        <Image
                                            source={{ uri: item.photogroup[1] }}
                                            style={styles.photo}
                                        />
                                    </View>
                                    <View style={{ flex: 1, marginLeft: 7 }}>
                                        <Image
                                            source={{ uri: item.photogroup[2] }}
                                            style={styles.photo2}
                                        />
                                        <Image
                                            source={{ uri: item.photogroup[3] }}
                                            style={styles.photo2}
                                        />
                                    </View>
                                </View>
                            </View>
                        }
                        {/* {
                            item.cateogry && item.cateogry.slug &&
                            <View style={{ flexDirection: 'row', marginTop: 16 }}>
                                <Image source={{ uri: item.cateogry.image }} style={styles.cateogryImg} />
                                <View style={{ marginLeft: 11, width: 200 }}>
                                    <Text style={styles.theText}>The</Text>
                                    <Text style={styles.cateogryTitle}>{item.cateogry.slug}</Text>
                                    <Text style={styles.webContent}>{item.cateogry.content}</Text>
                                </View>
                            </View>
                        } */}

                        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={images.chat}
                            style={styles.chatImg}
                        />
                        <Image
                            source={item.fav ? images.crown : images.bincrown}
                            style={styles.crownImg}
                        />
                    </View> */}
                    </View>
                    <View style={{ alignItems: 'center', position: 'absolute', right: 19, marginTop: 30 }}>
                        <Image
                            source={item.fav ? images.crown : images.bincrown}
                            style={styles.crownImg}
                        />
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: colors.WHITE }}>32</Text>
                        <Image
                            source={images.crown}
                            style={styles.crownImg}
                        />
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: colors.WHITE }}>89</Text>
                        <Image
                            source={images.crown}
                            style={styles.crownImg}
                        />
                    </View>
                </View>
                {
                    item.description &&
                    <Text style={styles.normalText}>
                        {item.description}
                    </Text>
                }
                <View style={{ alignItems: 'center'}}>
                    <View style={styles.total}>
                        {
                            item.hashtag && item.hashtag.map((hash, k) =>
                                <View key={k} style={styles.tagView}>
                                    <Text style={styles.tagText}>{hash}</Text>
                                </View>)
                        }
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        paddingVertical: 16,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18
    },
    titleText: {
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        lineHeight: 22,
        color: colors.WHITE
    },
    timeText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: colors.WHITE,
        lineHeight: 16
    },
    normalText: {
        fontSize: 17,
        fontFamily: 'Poppins-Bold',
        lineHeight: 30,
        marginTop: 10,
        marginLeft: 30,
        color: colors.WHITE
    },
    tagText: {
        color: colors.WHITE,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 21,
    },
    noticeText: {
        color: colors.WHITE,
        fontSize: 26,
        lineHeight: 29,
        fontFamily: 'Poppins-Bold'
    },
    photo: {
        width: "100%",
        height: 125,
        borderRadius: 20,
        backgroundColor: colors.GREY7,
        resizeMode: 'cover',
    },
    photo2: {
        width: "100%",
        height: 60,
        borderRadius: 20,
        marginBottom: 6,
        backgroundColor: colors.GREY7,
        resizeMode: 'cover'
    },
    bigPhoto: {
        width: '100%',
        height: 250,
        marginTop: 14.25,
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
        borderRadius: 20,
        marginTop: 14.25,
        paddingHorizontal: 24,
        paddingTop: 32
    },
    website: {
        height: 270,
        // width: "100%",
        marginTop: 12,
        marginLeft: 30,
        padding: 7.5,
        borderWidth: 1,
        borderColor: colors.GREY0,
        borderRadius: 20,
        borderTopRightRadius: 0,
        backgroundColor: colors.WHITE
    },
    webImg: {
        width: '100%',
        height: 130,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 0
    },
    webTitle: {
        color: colors.DARKBLUE,
        fontSize: 18,
        lineHeight: 27,
        fontFamily: 'Poppins-Bold',
        marginLeft: 6,
        marginTop: 7
    },
    webContent: {
        color: colors.LIGHTDARK,
        fontSize: 14,
        lineHeight: 17,
        fontFamily: 'Poppins-Light'
    },
    webUrl: {
        color: colors.PURPLE,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Poppins-Light',
        marginLeft: 6,
    },
    cateogryImg: {
        width: 78,
        height: 78,
        borderRadius: 39,
        borderWidth: 1,
        borderColor: colors.GREYA
    },
    theText: {
        color: colors.GREYA,
        fontSize: 14,
        lineHeight: 15,
        fontFamily: 'Poppins-Regular',
    },
    cateogryTitle: {
        fontSize: 24,
        lineHeight: 27,
        fontFamily: 'Poppins-Bold',
    },
    dotImg: {
        marginTop: 15,
        width: 20,
        height: 5
    },
    imageContainerIOS: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 0,
        overflow: 'hidden',
    },
    crownImg: {
        width: 29,
        height: 21,
        marginTop: 30
    },
    tagView: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 100,
        padding: 3,
        paddingHorizontal: 11,
        marginHorizontal: 4,
        marginTop: 5,
        justifyContent: 'flex-start'
    },
    total: {
        flexDirection: 'row',
        // justifyContent: 'center',
        marginHorizontal: 3,
        marginTop: 12,
        flexWrap: 'wrap',
        width: p(237)
    }
});
