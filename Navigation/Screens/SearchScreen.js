import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button, SafeAreaView} from 'react-native';

const SearchScreen = props => {

const [movieSearch, setMovieSearch] = useState('');

return(
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.topBar}>   

        <Text style={{fontWeight:'bold', color: 'white', fontSize: 50, }}> Movie </Text>
        
        <Text style={styles.font}>hub</Text>  
        
      </View>

      <View style={{justifyContent:'center', alignContent: 'center', flexDirection: 'row'}}>

      <Text style={{fontWeight:'bold', color: 'black', fontSize: 15, justifyContent:'center' }}> Assignment 2</Text>
      </View>


        <View style={styles.container}>
            
            <TextInput style={styles.typeInput} placeholder = "Type Movie Here" value = {movieSearch} onChangeText = {(text) => setMovieSearch(text) } />

            <Button   color="#FFA31A" title= "Search Movie" onPress={ 
                () => 
                props.navigation.navigate('DisplayScreen', {movieSearch: movieSearch})
              } />

        </View>



    </SafeAreaView>


);

}


const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },

    topBar: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center'
     
    },

    Button: {
      flex: 1,
      padding: 78,
  
    },

    font:{
      fontSize: 50,
      color: 'black',
      backgroundColor:'orange',
      fontWeight: 'bold',
      // borderRadius: '1vw'
      
    },

    typeInput:{
      backgroundColor: 'white',
      padding: 5,
      width: 240
    },

    droidSafeArea: {
      flex: 1,
      backgroundColor: '#FFA31A',
      paddingTop: 35
  },

   

  });


export default SearchScreen;