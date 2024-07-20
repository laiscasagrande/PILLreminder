import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Card } from 'react-native-paper';

export default function CardPill({ id, name, image }) {
    return (
        <Card key={id}>
            <Card.Content>
                <Text variant="titleLarge">{name}</Text>
            </Card.Content>
            <Card.Cover source={image} />
        </Card>
    )


}
