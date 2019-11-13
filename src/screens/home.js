import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Image } from 'react-native';
import { theme } from '../common/theme';
import { POSTS } from '../common/fakeDB';
import { colors } from '../common/colors';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, EvilIcons, Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Header from '../components/header';
import PostCard from '../components/postCard';
import { images } from '../common/images';

const width = Dimensions.get('window').width

export default class HomeScreen extends Component {
    _renderItem = ({ item, index }) => (
        <PostCard 
            item={item} 
            index={index}
            onGoToProfile={()=>Actions.profile({item})}
        />
    )
    render() {
        return (
            <View style={theme.container}>
                <Header
                    title={'App'}
                    leftElement={(<Ionicons name="md-settings" size={p(18)} />)}
                    rightElement={(<Ionicons name="md-send" size={p(18)} />)}
                />
                <FlatList
                    style={{ backgroundColor: '#fff' }}
                    data={POSTS}
                    keyExtractor={(item, i) => String(i)}
                    renderItem={this._renderItem}
                    numColumns={1}
                    ListFooterComponent={<View style={{ height: p(150) }} />}
                />
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
                        <Image source={images.group} style={styles.groupImg}/>
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
