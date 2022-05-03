import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image } from 'react-native';



const DisplayScreen = props => {

  const [movieSearch, setMovieSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const getMovie = async (movieSearch) => {

    const responceMovie = await fetch('http://www.omdbapi.com/?s=' + movieSearch + '&apikey=824e3b1b');
    const search = await responceMovie.json();
    
    setMovies(search.Search);
  };

  useEffect(() => {
    getMovie(props.route.params.movieSearch);
  }, []);

  return (

<SafeAreaView style={styles.droidSafeArea} >
{console.log(movies)}
{console.log('gwwegwgwe')}
      <View style={styles.container}>
        <Text style={{ padding: 5, fontSize: 30, fontWeight: 'bold', color: 'white', alignItems:'center'  }}> Results: {props.route.params.movieSearch}   </Text>


        <ScrollView style={{width: 700}}>
          {movies.map(
            (item) => (

        <View style={{justifyContent:'center', alignItems: 'center'}}>
              <View style={{paddingTop:40}}>
                <Image style={{ width: 150,padding: 20, height: 250, alignItems: 'center', justifyContent: 'center' }} source={{ uri: item.Poster }} />
              </View>

              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white' }}> {item.Title} { } </Text>
              </View>

              <View>
              <Button style={{padding: 10}} color="#FFA31A" title="More Details" onPress={
                    () => props.navigation.navigate('DetailScreen', { imdbID: item.imdbID })
                  } />
              </View>

        </View>

  
                
           


               
                
            )
      
          )}
          </ScrollView>

          <Button color="#FFA31A" title="Press To Search again" onPress={
            () => props.navigation.navigate('SearchScreen')
          } />


      



      </View>
      </SafeAreaView>











 


);


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35
  },
  Touchable: {
    backgroundColor: 'orange',
    color: 'black',
    fontSize: 25,

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

export default DisplayScreen;