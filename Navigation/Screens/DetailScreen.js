import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import {View, Text, StyleSheet, Button, Image, SafeAreaView, ScrollView} from 'react-native';




const DetailScreen = props => {

  const [movieDetail, setMovieDetail] = useState({});

  const [movieTest, setMovieTest] = useState(
    {"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","imdbID":"tt0076759","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
  );


    const getDetail = async (imdbID) => {

        const responceMovie = await fetch('http://www.omdbapi.com/?i='+ imdbID +'&apikey=824e3b1b');
  
        const search = await responceMovie.json();

        setMovieDetail(search);
  
  
      };
  


  useEffect( ()=>{

    getDetail(props.route.params.imdbID);

  },[]);


return(
<SafeAreaView style={styles.droidSafeArea}>



  <View style={styles.container}>

<ScrollView> 
    <View style={styles.infoAlign}>

    
       <Image style={{width: 350, height: 450}} source={{uri: movieDetail.Poster }} />
    
       

      <View>
             <Text style={styles.Text}> Title: {movieDetail.Title} </Text>
             <Text style={styles.Text}> Year: {movieDetail.Year} </Text>{}
             <Text style={styles.Text}> Released: {movieDetail.Released} </Text>{}
             <Text style={styles.Text}> IMDB ID:  {movieDetail.imdbID} </Text>{}
             <Text style={styles.Text}>Language: {movieDetail.Language} </Text>{}
             <Text style={styles.Text}> Plot: {movieDetail.Plot} </Text>{}
       </View>


   </View>

   </ScrollView>
            <Button color="#FFA31A" title= "Back to Movies" onPress={ 
                () => props.navigation.navigate('DisplayScreen')
              } />

</View>

</SafeAreaView>
);

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 10
    },

    infoAlign: {
    
      flexDirection: 'column',
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },

    Text:{
      padding: 7, 
      fontSize: 22, 
      color: 'white',
      flexWrap: 'wrap',
    },

    droidSafeArea: {
      flex: 1,
      backgroundColor: '#FFA31A',
      paddingTop: 35
     
  },

  });

export default DetailScreen;