import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ImgProduct = (props) => {
    return (
        <View>
            <Image style = {styles.ImageProduct} source={props.path} />
        </View>
    );
};

const styles = StyleSheet.create({
    ImageProduct: {
      width: 150,
      height:100,
    },
  });

export default ImgProduct;