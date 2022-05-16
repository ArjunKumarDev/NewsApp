import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "../components";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <View style={style.container}>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
    </View>
  );
};

export default SearchScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
