import { ScrollView, Text, VStack, View } from 'native-base'
import React from 'react'
import { SearchBar } from '@rneui/themed'
import Post from '../../../components/Post'


type Props = {}

const categories = ["Sports", "Lifestyle", "Tech", "Art", "Literature", "Poetry"]

export default function Search({ }: Props) {
    return (
        <VStack bgColor="white" flex="1" px='4' py='2' space="5">
            <SearchBar platform='android' placeholder='What are you looking for?' containerStyle={{ borderWidth: 1, borderRadius: 30 }} />
            <View flexDir="row" justifyContent="space-beween" alignItems="center">
                {categories.map(category => (
                    <View key={category} borderWidth={1} borderRadius={10} px={4} py={2}>
                        <Text>{category}</Text>
                    </View>
                ))}
            </View>

            <ScrollView>
                {categories.map((category, index) => <Post key={category} content={category} live={index % 2 == 0} audio={index % 2 != 0} />)}
            </ScrollView>
        </VStack>
    )
}