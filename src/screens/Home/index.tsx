import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { Icon } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/dimensions';
import { useNavigation } from '@react-navigation/native';

import Uploads from './Tab/Uploads';
import Search from './Tab/Search';
import Post from './Tab/Post';
import Notifications from './Tab/Notifications';
import Favorites from './Tab/Favorites';
import { Button, Text, View } from 'native-base';
import { W3mButton } from '@web3modal/wagmi-react-native';


const Header = () => {
    return (
        <View flexDirection="row" alignItems="center" justifyContent="space-between" px="4" py="2">
            <Text fontSize="xl" fontWeight="semibold">StatReel</Text>
            <W3mButton />
        </View>
    )
}

const HomeTab = createBottomTabNavigator();
const TabNavigator = () => (
    <HomeTab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: '#001433',
                borderTopWidth: 0,
                paddingBottom: 0
            },
            tabBarLabel: "",
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarItemStyle: { marginVertical: 5 },
        }}>
        <HomeTab.Screen
            name="Uploads"
            component={Uploads}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="home"
                        color={focused ? 'white' : 'grey'}
                        size={WINDOW_WIDTH * 0.06}
                    />
                ),
            }}
        />
        <HomeTab.Screen
            name="Search"
            component={Search}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="compass"
                        type="ionicon"
                        color={focused ? 'white' : 'grey'}
                        size={WINDOW_WIDTH * 0.06}
                    />
                ),
            }}
        />
        <HomeTab.Screen
            name="Post"
            component={Post}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Pressable>
                        <Icon name="add" color="white" size={25} />
                    </Pressable>
                ),
            }}
        />
        <HomeTab.Screen
            name="Notifications"
            component={Notifications}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="notifications"
                        color={focused ? 'white' : 'grey'}
                        size={WINDOW_WIDTH * 0.06}
                    />
                ),
            }}
        />
        <HomeTab.Screen
            name="Favorites"
            component={Favorites}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="person"
                        color={focused ? 'white' : 'grey'}
                        size={WINDOW_WIDTH * 0.06}
                    />
                ),
            }}
        />
    </HomeTab.Navigator>
)

const Main = () => {
    const navigation = useNavigation();
    return (
        <View flex="1">
            <Header />
            <TabNavigator />
        </View>
    );
};

export default Main;
