import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useEffect, useState } from "react";

const MovieDetails = ({ route }) => {
  const [data, setData] = useState([]);

  const { movieId } = route.params;

  function fetchMovie() {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cb3a97ce57284e6fbd4091cbd4ac35b9`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
        }}
      />
      <Text style={styles.title}>{data.title}</Text>
      <Text>{data.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  image: {
    aspectRatio: 1.5,
    resizeMode: "contain",
  },
});

export default MovieDetails;
