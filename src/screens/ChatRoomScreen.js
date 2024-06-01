import React from "react";
import { useTheme } from "@react-navigation/native";
import { View, Box, Image, Pressable, Text, Center, ScrollView } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ChatRoomList from "../components/ChatRoomList";
import ChatRoomHeader from "../components/ChatRoomHeader";

export default ChatRoomScreen = ({navigation}) => {
    const {colors} =useTheme();
    return(
            <ScrollView bg={colors.card} flex={1}>
                <Center>
                    <ChatRoomList />
                </Center>
            </ScrollView>
    )
}