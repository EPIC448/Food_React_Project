import React, { useState,useEffect }from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from "../hooks/useResults";
import ResultsList from '../components/ResultsList';


const SearchScreen = ({ navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();


  const filterResultByPrice = (price) => {

    //price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    })
  };
  
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>

        <ResultsList results={filterResultByPrice('$')}title = "Cost Effective" navigation={navigation} />
        <ResultsList results={filterResultByPrice('$$')}title = "Bit Pricer" navigation={navigation}/>
        <ResultsList results={filterResultByPrice('$$$')} title="Big Spender" navigation={navigation} />
        
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({}); 

export default SearchScreen;
