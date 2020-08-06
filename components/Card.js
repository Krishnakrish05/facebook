import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{props.post}</Text>
      <Image source={require("../assets/fb1.jpg")} style={styles.img} />
      <View style={styles.like}>
        <Text
          //onPress={() => props.navigation.navigate("comment")}
          style={styles.text2}
        >
          👍🏻😂❤️ 120
        </Text>
        <Text onPress={props.comment} style={styles.text3}>
          20 Comments. 12 Shares
        </Text>
      </View>
      <View style={{ borderColor: "#D8D8D8", borderWidth: 0.4 }}></View>
      <View style={styles.icons}>
        <AntDesign
          style={{ paddingHorizontal: 5 }}
          name="like2"
          size={24}
          color="black"
        />
        <Text style={{ marginTop: 3, color: "#9D9D9D" }}>Like</Text>
        <MaterialCommunityIcons
          onPress={props.comment}
          style={{ marginLeft: 55, paddingHorizontal: 5 }}
          name="comment-outline"
          size={24}
          color="black"
        />
        <Text
          onPress={props.comment}
          style={{ marginTop: 2, color: "#9D9D9D" }}
        >
          Comment
        </Text>
        <FontAwesome
          style={{ marginLeft: 55, paddingHorizontal: 5 }}
          name="share"
          size={23}
          color="black"
        />
        <Text style={{ marginTop: 2, color: "#9D9D9D" }}>Share</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 365,
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden",
    borderWidth: 0.2,
    marginTop: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontStyle: "normal",
    paddingBottom: 10,
    paddingTop: 4,
  },
  img: {
    width: "100%",
    height: "60%",
  },
  like: {
    flexDirection: "row",
    flex: 1,
    marginTop: 2,
  },
  text2: {
    padding: 5,
    fontWeight: "200",
    fontSize: 14,
  },
  text3: {
    color: "#6B6B6B",
    marginLeft: 80,
    padding: 5,
  },
  icons: {
    flexDirection: "row",
    flex: 1,
    marginTop: 8,
  },
});

export default Card;
