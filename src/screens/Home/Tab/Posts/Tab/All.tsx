import { Text, View } from 'native-base'
import React from 'react'
import { FlashList } from '@shopify/flash-list';

import Post from '../../../../../components/Post'
import { WINDOW_HEIGHT } from '../../../../../utils/dimensions';


type Props = {}

export default function All({ }: Props) {

    const keyExtractor = (item: any, index: number) => item;

    const renderItem = ({ item, index }: any) => (
        <Post content={item} />
    )

    return (
        <View flex="1" bgColor="white">
            <FlashList
                keyExtractor={keyExtractor}
                data={["aaa", "bbb", "ccc", "ddd", "eee"]}
                renderItem={renderItem}
                estimatedItemSize={WINDOW_HEIGHT}
            />
        </View>
    )
}