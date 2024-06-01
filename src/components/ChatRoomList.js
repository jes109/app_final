import React from "react";
import { TouchableOpacity, FlatList, Center, Box, View, StyleSheet } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import ChatRoom from "../json/ChatRoom.json";
import ChatRoomItem from "./ChatRoomItem";

const ChatRoomList = () =>{
    const {navigate} = useNavigation();
    const renderItem=({item})=><ChatRoomItem chat={item}/>;

    return(
        <View>
            <FlatList

            data={ChatRoom}
            renderItem={renderItem}
            keyExtractor={(item,index)=>index+item}
            scrollEnabled={false}

            />

            <View style={styles.icon}>
                <TouchableOpacity 
                    activeOpacity={0.6}
                    onPress={() => navigate('ChatMap')}
                >
                    <Box>
                        <Center>
                            <MaterialCommunityIcons name="map-search" size={80}/>
                        </Center>
                    </Box>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        icon: {
            marginTop: 20
        }
    }
);

export default ChatRoomList