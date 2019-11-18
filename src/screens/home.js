import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { POSTS } from '../common/fakeDB';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';
import PostCard from '../components/postCard';

const height = Dimensions.get('window').height

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
            <View>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={POSTS}
                    renderItem={this._renderItem}
                    sliderHeight={height}
                    itemHeight={height}
                    vertical
                />
            </View>
        );
    }
}
