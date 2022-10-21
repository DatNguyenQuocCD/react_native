import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import MainTitle from "../../molecules/MainTitle/MainTitle";

const Banner = () => {
    return (
        <View>
            <MainTitle/>
            <Image style = {styles.banner} source={require('../../../asset/img/background.png')} />
            <ImageBackground source={'../../../asset/img/background.png'}/>
            <View>
                <Text style = {styles.title}>Save extra on every order</Text>
                <Text style = {styles.description}>Etiam mollis metus non faucibus sollicitudin. </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    banner: {
        width: 365,
        height: 180,
        borderRadius: 10,
    },
    title: {
        color:"#1987FB",
        fontFamily:'Overpass',
        fontWeight:"700",
        fontSize: 25,
        width: 180,
    },
    description: {
        color:"rgba(9, 15, 71, 0.65)",
        fontFamily:'Overpass',
        fontWeight:"500",
        fontSize: 15,
        width: 180,
    },
  });

export default Banner;