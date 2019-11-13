import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../common/theme';
import { POSTS } from '../common/fakeDB';
import { colors } from '../common/colors';
import { p } from '../common/normalize';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, EvilIcons, Ionicons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Header from '../components/header';
import PostCard from '../components/postCard';

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
                    ListFooterComponent={<View style={{ height: p(80) }} />}
                />
                <LinearGradient
                    colors={['transparent', colors.PURPLE]}
                    start={[1, 0]} end={[1, 1]}
                    style={styles.gradientView}
                >
                    <View style={styles.iconView}>
                        <MaterialCommunityIcons
                            name="home-outline"
                            size={p(18)}
                            style={styles.icon}
                            color={colors.DARKGREY}
                        />
                        <MaterialCommunityIcons
                            name="bell-ring-outline"
                            size={p(18)}
                            style={styles.icon}
                            color={colors.DARKGREY}
                        />
                        <View style={styles.roundBtn}>
                            <MaterialCommunityIcons
                                name="plus"
                                size={p(22)}
                                style={styles.icon}
                                color={colors.WHITE}
                            />
                        </View>
                        <MaterialCommunityIcons
                            name="email-outline"
                            size={p(18)}
                            style={styles.icon}
                            color={colors.DARKGREY}
                        />
                        <EvilIcons
                            name="user"
                            size={p(20)}
                            style={styles.icon}
                            color={colors.DARKGREY}
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
});
