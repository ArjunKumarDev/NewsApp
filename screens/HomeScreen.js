import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Article } from "../components";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Article />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
