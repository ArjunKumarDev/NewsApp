import React from "react";
import { Text, Image, StyleSheet, SafeAreaView, View } from "react-native";
import moment from "moment";

export default function Article(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: props?.urlToImage,
        }}
        style={styles.image}
      />

      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{props?.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {props?.description}
        </Text>

        <View style={styles.detail}>
          <Text style={styles.heading}>
            by: <Text style={styles.author}>{props?.author}</Text>{" "}
          </Text>
          <Text style={styles.date}>
            {moment(props?.publishedAt).format("MMM Do YYYY")}
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>
            source: <Text style={styles.sourceTitle}>{props?.sourceName}</Text>{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 3,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: "bold",
    color: "#219ebc",
  },
  date: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#219ebc",
  },
  sourceTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#219ebc",
  },
});
