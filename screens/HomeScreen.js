import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Article } from "../components";
import axios from "axios";

export default function HomeScreen() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=1b43c597c65a4666b438a9b93f490d1c",
        {
          params: {
            category: "technology",
          },
        }
      )
      .then((res) => setArticles(res?.data?.articles))
      .catch((e) => console.error(e));
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item?.urlToImage}
            title={item?.title ?? "NA"}
            description={item?.description ?? "NA"}
            author={item?.author ?? "NA"}
            publishedAt={item?.publishedAt ?? "NA"}
            sourceName={item?.source?.name ?? "NA"}
          />
        )}
        keyExtractor={(item) => item?.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
