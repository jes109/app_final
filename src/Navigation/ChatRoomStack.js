import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { View, Pressable, Image } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useNavigationContext } from "./NavigationContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

import ChatRoomScreen from "../screens/ChatRoomScreen";
import ChatRoomDetailScreen from "../screens/ChatRoomDetailScreen";
import ChatMapScreen from "../screens/ChatMapScreen";

const Stack = createStackNavigator();

export default ChatRoomStack = ({navigation}) => {
    //const {navigation} = useNavigation();
    const {colors}=useTheme();

    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{ backgroundColor:colors.header},
            headerTitleStyle:{
                color:colors.primary800,
                fontSize:20
            }
        }}
        >
            <Stack.Screen name="ChatRoom" component={ChatRoomScreen} 
            options={{
                title: "賞鳥同好關渡一日遊",
                headerLeft:()=>(
                    <Pressable pl={12}>
                        <AntDesign name="left" size={24} color={colors.primary800} onPress={()=>navigate("Chat")} /> 
                    </Pressable>),
                headerRight: () => (
                    <View style={styles.headerStyle}>
                        <View style={styles.icons}>
                            <Pressable>
                            <MaterialCommunityIcons name="square-edit-outline" size={28} color={colors.primary800}/>
                            </Pressable>
                        </View>
                    </View>
                )
            }}
            />
            <Stack.Screen name="ChatMap" component={ChatMapScreen} 
            
            />
        </Stack.Navigator>
    )
}

const styles=StyleSheet.create(
    {
        headerStyle: {
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 12,
            //paddingVertical: 20,
            flexDirection: "row"
        },
        iconl: {
            width: 30,
            height: 30,
            marginRight: 5
        },
        iconr: {
            width: 30,
            height: 30
        },
        icons: {
            flexDirection: "row"
        },
        icon: {
            width: 30,
            height: 30
        }
    }
);