import { ScrollView, Text, VStack, View } from 'native-base'
import React from 'react'
import { Search as SearchProfile, SearchType } from '@lens-protocol/react-native-lens-ui-kit'
import { useNavigation } from '@react-navigation/native'


type Props = {}

export default function Search({ }: Props) {
    const navigation = useNavigation()
    return (
        <View flex="1" bgColor="black">
            <SearchProfile onProfileImagePress={publication => navigation.navigate("Profile", { profile: publication.profile })} />
        </View>
    )
}