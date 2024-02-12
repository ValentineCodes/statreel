import { Profiles } from '@lens-protocol/react-native-lens-ui-kit'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View } from 'native-base'
import React from 'react'
import { useAccount } from 'wagmi'

type Props = {}

export default function Following({ }: Props) {
    const navigation = useNavigation()
    const route = useRoute()
    const { address } = useAccount()

    return (
        <View flex="1" bgColor="black">
            <Profiles
                profilesQuery={{
                    name: "getFollowing",
                    ethereumAddress: route.params.ethereumAddress
                }}
                signedInUserAddress={address}
                onProfilePress={profile => navigation.navigate("Profile", { profile })}
            />
        </View>
    )
}