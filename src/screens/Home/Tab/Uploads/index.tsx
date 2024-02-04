import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { WINDOW_WIDTH } from '../../../../utils/dimensions';

import All from './All';
import Following from './Following';

const UploadsTab = createMaterialTopTabNavigator();

const Uploads = () => {
    return (
        <View style={{ flex: 1 }}>
            <UploadsTab.Navigator
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
                <UploadsTab.Screen name="All" component={All} />
                <UploadsTab.Screen name="Following" component={Following} />
            </UploadsTab.Navigator>
        </View>
    );
};

export default Uploads