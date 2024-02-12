import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from '../Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile as ProfileProps, Publication as PublicationProps } from '@lens-protocol/react-native-lens-ui-kit/dist/graphql/generated';
import Profile from '../Profile';
import Comments from '../Comments';
import Following from '../Following';

type StackScreenParamsList = {
    Home: undefined,
    Profile: {
        profile: ProfileProps
    },
    Comments: {
        publicationId: string
    },
    Following: {
        ethereumAddress: string
    }
};

const StackScreen = createNativeStackNavigator<StackScreenParamsList>();

export default function Navigation() {
    return (
        <NavigationContainer>
            <StackScreen.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}>
                <StackScreen.Screen name="Home" component={Home} />
                <StackScreen.Screen name="Profile" component={Profile} />
                <StackScreen.Screen name="Comments" component={Comments} />
                <StackScreen.Screen name="Following" component={Following} />
            </StackScreen.Navigator>
        </NavigationContainer>
    )
}