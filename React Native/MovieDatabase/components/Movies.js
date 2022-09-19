import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

const Movies = ({ navigation }) => {
  const [data, setData] = useState([]);

  function fetchMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=cb3a97ce57284e6fbd4091cbd4ac35b9`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }

  useEffect(() => {
    console.log("Fetching movies with API key: " + process.env.API_KEY);
    fetchMovies();
  }, []);

  const Movie = ({ navigation, movieId, image }) => (
    <View>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Movie Details", {
            movieId,
          })
        }
      >
        <Image
          style={styles.image}
          source={{ uri: `https://image.tmdb.org/t/p/original${image}` }}
        ></Image>
      </TouchableHighlight>
    </View>
  );

  const renderItem = ({ item }) => (
    <Movie navigation={navigation} movieId={item.id} image={item.poster_path} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default Movies;
