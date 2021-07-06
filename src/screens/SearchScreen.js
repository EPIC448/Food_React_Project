import  * as React from 'react';
import { ViewBase, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {
    return <View style={styles.background}>
        <Text>
            Search Screen
        </Text>
    </View>
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE'
    }
});

export default SearchScreen;