
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}> {result.name}</Text>
            <Text> {result.rating}, Stars, {ResultsDetail.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;