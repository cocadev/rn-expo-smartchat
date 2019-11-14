import React, { Component } from 'react';
import { View, FlatList, Image} from 'react-native';
import { POSTS } from '../common/fakeDB';
import { p } from '../common/normalize';
import { Actions } from 'react-native-router-flux';
import PostCard from '../components/postCard';
import Header from '../components/header';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../common/images';

export default class HomeScreen extends Component {
    _renderItem = ({ item, index }) => (
        <PostCard
            item={item}
            index={index}
            onGoToProfile={() => Actions.profile({ item })}
        />
    )
    render() {
        return (
            <>
                <Header
                    title={'App'}
                    leftElement={(<Ionicons name="md-settings" size={p(18)} />)}
                    rightElement={(<Image source={images.messages} />)}
                />
                <FlatList
                    style={{ backgroundColor: '#fff' }}
                    data={POSTS}
                    keyExtractor={(item, i) => String(i)}
                    renderItem={this._renderItem}
                    numColumns={1}
                    ListFooterComponent={<View style={{ height: p(150) }} />}
                    pagingEnabled={true}
                />
            </>
        );
    }
}
