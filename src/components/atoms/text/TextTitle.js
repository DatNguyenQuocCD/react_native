import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextTitle = (props) => {
    return (
        <View>
            <Text style = {styles.Title}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Title: {
      fontFamily: "Overpass",
      fontSize: 30,
      fontWeight: "700",
      color: "#090F47",
    },
  });

export default TextTitle;