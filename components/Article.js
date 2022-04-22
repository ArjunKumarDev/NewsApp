import React from "react";
import { Text, Image, StyleSheet, SafeAreaView } from "react-native";

export default function Article() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>Tech News Application</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
});
