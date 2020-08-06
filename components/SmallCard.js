import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SmallCard = (props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image style={styles.image} source={require("../assets/fb2.jpg")} />
        <View style={styles.container}>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 5,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {props.name}
          </Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingLeft: 70 }}>
        <Text style={{ color: "#808080" }}>1hr</Text>
        <Text style={{ paddingLeft: 10, color: "#808080" }}>Like</Text>
        <Text style={{ paddingLeft: 10, color: "#808080" }}>Reply</Text>
        <Text style={{ paddingLeft: 10, color: "#808080" }}>Message</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    borderRadius: 30,
    backgroundColor: "#E4E4E4",
    marginTop: 25,
  },
  text: {
    margin: 10,
    fontSize: 14,
    fontWeight: "200",
    paddingLeft: 5,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    margin: 5,
    marginTop: 20,
  },
});
export default SmallCard;
