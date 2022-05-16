import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function SearchBar({ searchValue, setSearchValue }) {
  return (
    <View style={style.container}>
      <TextInput
        placeholder="Search"
        style={style.input}
        value={searchValue}
        onChangeText={(text) => setSearchValue(text)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 10,
  },

  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    color: "#000",
    borderWidth: 1,
  },
});
