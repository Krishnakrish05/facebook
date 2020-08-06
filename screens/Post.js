import React, { useState } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import data from "../json/data";
import Card from "../components/Card";
import { FontAwesome } from "@expo/vector-icons";

const Post = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            post={item.post}
            comment={() => props.navigation.navigate("comment")}
          />
        )}
      />
    </View>
  );
};

Post.navigationOptions = (navData) => {
  return {
    headerTitle: () => (
      <View style={styles.search}>
        <FontAwesome
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 10,
          }}
          name="search"
          size={15}
          color="black"
        />
        <TextInput style={{ paddingLeft: 10 }} placeholder="Search" />
      </View>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="back" iconName="backward" />
      </HeaderButtons>
    ),

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="back" iconName="mail-forward" />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    backgroundColor: "#EAEAEA",
    height: 40,
    width: 220,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
  },
});
export default Post;
