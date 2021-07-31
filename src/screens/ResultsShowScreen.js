import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
 
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }; 

    useEffect(() => {
        getResult(id);
    }, []);
 
    if (!result) {
        return null
    };

    return <View>
        <Text style={ styles.font}> Name: {result.name}</Text>
        <Text style={ styles.font}> Phone:{result.phone}</Text>
        <Text style={ styles.font}> price: {result.price}</Text>
        <Text style={ styles.font}> Rating: {result.rating}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={ styles.image} source={{ uri: item}} />

            }}
            />
    </View>
}


const styles = StyleSheet.create({
    font: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    image: {
       height: 200,
        width: 300,
        margin: 8
},
});


export default ResultsShowScreen;