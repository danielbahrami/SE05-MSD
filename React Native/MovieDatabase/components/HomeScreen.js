import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  function fetchMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }

  useEffect(() => {
    console.log("Fetching movies with API key: " + process.env.API_KEY);
    fetchMovies();
  }, []);

  const Movie = ({ navigation, title, movieId }) => (
    <View>
      <Text
        onPress={() =>
          navigation.navigate("Details", {
            movieId,
          })
        }
        style={styles.title}
      >
        {title}
      </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Movie navigation={navigation} movieId={item.id} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default HomeScreen;
