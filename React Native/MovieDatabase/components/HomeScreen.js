import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  function fetchMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }

  const renderItem = ({ item }) => (
    <Item navigation={navigation} movieId={item.id} title={item.title} />
  );

  return (
    <View style={styles.container}>
      <Header title={"Movies"} size={30} color={"black"}></Header>
      <FlatList>
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      </FlatList>
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
