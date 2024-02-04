import { Icon } from '@rneui/themed';
import { Text, View } from 'native-base';
import React from 'react'

type Props = {
    content: string;
    live?: boolean;
    audio?: boolean;
}

export default function Post({ content, live, audio }: Props) {
    return (
        <View justifyContent="center" alignItems="center" p="4" borderWidth="1">
            <Text fontSize="xl">{content}</Text>

            {live && <View position="absolute" top={2} right={2} bgColor="red.600" px="1" py="0.5">
                <Text color="white">LIVE</Text>
            </View>}

            {audio && <View position="absolute" bottom={2} right={2}>
                <Icon
                    name="compass"
                    type="ionicon"
                />
            </View>}
        </View>
    )
}