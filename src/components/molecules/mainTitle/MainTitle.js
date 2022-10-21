import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icons from "../../atoms/icon/Icon";

const MainTitle = () => {
    return (
        <View style = {styles.displayTop}>
            <Icons name = {"arrowleft"} color = {"black"} size = {30}/>
            <Text style = {styles.title}>Diabetes Care</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        color:"#090F47",
        fontFamily:'Overpass',
        fontSize:30,
        fontWeight:"900",
        marginLeft: 21,
      },
    displayTop: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 20,
      }
  });

export default MainTitle;