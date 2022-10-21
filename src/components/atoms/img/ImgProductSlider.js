import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ImgProductSlider = (props) => {
    return (
        <View>
            <Image style = {styles.ImageSlider} source={require(props.text)} />
        </View>
    );
};

const styles = StyleSheet.create({
    ImageSlider: {
      width: 150,
      height:100,
    },
  });

export default ImgProductSlider;