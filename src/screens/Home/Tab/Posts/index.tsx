import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { WINDOW_WIDTH } from '../../../../utils/dimensions';

import All from './Tab/All';
import Following from './Tab/Following';

const PostsTab = createMaterialTopTabNavigator();

const Posts = () => {
    return (
        <View style={{ flex: 1 }}>
            <PostsTab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    tabBarContentContainerStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    tabBarLabelStyle: {
                        textTransform: 'none',
                        fontSize: WINDOW_WIDTH * 0.04,
                    },
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#888',
                }}>
                <PostsTab.Screen name="All" component={All} />
                <PostsTab.Screen name="Following" component={Following} />
            </PostsTab.Navigator>
        </View>
    );
};

export default Posts