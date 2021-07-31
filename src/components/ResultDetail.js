
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}> {result.name}</Text>
            <Text style={styles.name}> {result.rating}, Stars, {ResultsDetail.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
      backgroundColor: 'black'  
    },

    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export default ResultsDetail;