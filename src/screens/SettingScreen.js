import React from "react";
import { View, Box, Image, Pressable, Text, Center } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import { Appearance, Dimensions, useColorScheme } from "react-native";

//import SettingList from "../components/SettingList";
//import SettingHeader from "../components/SettingHeader"
import SettingDetail from "../components/SettingDetail";

export default SettingScreen = ({navigation}) => {
    
    //const colorScheme = useColorScheme();

  //const toggleColorMode = () => {
  //  const nextColorScheme = colorScheme === "light" ? "dark" : "light";
  //  Appearance.setColorScheme(nextColorScheme);
  //};

    return(
        <SafeAreaProvider>
            <View style={{flex: 1}}>
                <Center><SettingDetail /></Center>
            </View>
        </SafeAreaProvider>
    );
};