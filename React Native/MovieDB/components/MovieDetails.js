import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { API_KEY } from "@env";

const MovieDetails = ({ route }) => {
  const [data, setData] = useState([]);

  const { movieId } = route.params;

  function fetchMovie() {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
        }}
      />
      <Text style={styles.title}>{data.title}</Text>
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.overview}>{data.overview}</Text>
        <Text style={styles.release_date}>
          Release date: {data.release_date}
        </Text>
        <Text style={styles.vote_average}>
          Review score: {data.vote_average}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontFamily: "Arial-BoldMT",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  ScrollView: {
    height: "100%",
    marginBottom: 50,
  },
  overview: {
    color: "white",
    fontSize: 20,
    fontFamily: "Avenir",
    marginLeft: 15,
    marginRight: 15,
  },
  release_date: {
    color: "white",
    fontSize: 15,
    fontFamily: "Arial-BoldMT",
    marginTop: 25,
    marginLeft: 15,
  },
  vote_average: {
    color: "white",
    fontSize: 15,
    fontFamily: "Arial-BoldMT",
    marginTop: 25,
    marginLeft: 15,
  },
});

export default MovieDetails;
