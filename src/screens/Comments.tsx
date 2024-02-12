import { Feed } from '@lens-protocol/react-native-lens-ui-kit'
import { useRoute } from '@react-navigation/native'
import { View } from 'native-base'
import React from 'react'

type Props = {}

export default function Comments({ }: Props) {
    const route = useRoute()
    return (
        <View flex="1" bgColor="black">
            <Feed
                publicationsQuery={{
                    name: "getComments",
                    publicationId: route.params.publicationId
                }} />
        </View>
    )
}