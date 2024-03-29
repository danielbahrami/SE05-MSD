import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { API_KEY } from "@env";

const Movies = ({ navigation }) => {
  const [data, setData] = useState([]);

  function fetchMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
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
  image: {
    width: 150,
    height: 250,
  },
});

export default Movies;
