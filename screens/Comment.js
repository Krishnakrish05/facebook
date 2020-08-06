import React from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import data from "../json/data";
import SmallCard from "../components/SmallCard";
import { AntDesign } from "@expo/vector-icons";

const Comment = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SmallCard text={item.comments[0]} name={item.name} />
        )}
      />
      <View style={styles.textinput}>
        <TextInput
          style={{ paddingLeft: 60 }}
          placeholder="Type a Message"
          placeholderTextColor="grey"
        />
      </View>
    </View>
  );
};

Comment.navigationOptions = () => {
  return {
    headerTitle: () => (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Athiya Raj and 2K others
        </Text>
        <AntDesign
          style={{ paddingLeft: 13 }}
          name="right"
          size={20}
          color="black"
        />
      </View>
    ),
    headerRight: () => (
      <AntDesign
        style={{ paddingRight: 15 }}
        name="like2"
        size={22}
        color="black"
      />
    ),
    headerLeft: () => (
      <View style={{ paddingLeft: 15 }}>
        <Text>👍🏻😂❤️</Text>
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    height: 60,
    borderRadius: 60,
    backgroundColor: "#E0E0E0",
    marginBottom: 3,
    justifyContent: "center",
  },
});
export default Comment;
