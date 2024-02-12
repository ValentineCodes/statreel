import React from 'react'

import { Profile } from '@lens-protocol/react-native-lens-ui-kit'
import { useRoute } from '@react-navigation/native'
import { View } from 'native-base'

type Props = {}

export default function UserProfile({ }: Props) {
    const route = useRoute()
    return (
        <View flex="1" bgColor="black">
            <Profile profile={route.params.profile} />
        </View>
    )
}