import { Text } from 'native-base'
import React from 'react'
import Post from '../../../../components/Post'

type Props = {}

export default function All({ }: Props) {
    return (
        <Post content='Hello World!' live audio />
    )
}