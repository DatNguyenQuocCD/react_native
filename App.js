import React from "react";
import { View, Text, StyleSheet} from "react-native";
import ImgProduct from "./src/components/atoms/img/ImgProduct";
import Banner from "./src/components/organisms/banner/Banner";

export default function App (){
  return(
    <View style = {styles.body}>
      <Banner/>
      <ImgProduct path={require("/src/asset/img/product1.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    marginLeft: 24,
    marginRight: 24,
  },
});