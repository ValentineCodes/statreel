import React, { ProfilerProps } from 'react'

import { ProfileMetadata } from '@lens-protocol/react-native-lens-ui-kit'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View } from 'native-base'
import { Profile } from '@lens-protocol/react-native-lens-ui-kit'

type Props = {}

export default function UserProfile({ }: Props) {
    const navigation = useNavigation()
    const route = useRoute()
    return (
        <View flex="1" bgColor="black">
            <Profile
                profile={route.params.profile}
                onFollowingPress={profile => navigation.navigate("Following", { ethereumAddress: profile.ownedBy })}
                onCommentPress={publication => {
                    navigation.navigate("Comments", { publicationId: publication.id })
                }}
                onProfileImagePress={publicAction => navigation.navigate("Profile", { profile: publicAction.profile })}
            />
        </View>
    )
}