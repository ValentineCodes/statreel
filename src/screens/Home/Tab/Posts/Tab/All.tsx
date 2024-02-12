import { Text, View } from 'native-base'
import React from 'react'
import { FlashList } from '@shopify/flash-list';

import Post from '../../../../../components/Post'
import { WINDOW_HEIGHT } from '../../../../../utils/dimensions';
import { Feed } from '@lens-protocol/react-native-lens-ui-kit';
import { useAccount } from 'wagmi';
import { useNavigation } from '@react-navigation/native';
import { Publication } from '@lens-protocol/react-native-lens-ui-kit/dist/graphql/generated';


type Props = {}

export default function All({ }: Props) {
    const navigation = useNavigation()
    return (
        <View flex="1" bgColor="black">
            <Feed
                onProfileImagePress={publicAction => navigation.navigate("Profile", { profile: publicAction.profile })}
                onCommentPress={(publication: Publication) => {
                    navigation.navigate("Comments", { publicationId: publication.id })
                }}
            />
        </View>
    )
}