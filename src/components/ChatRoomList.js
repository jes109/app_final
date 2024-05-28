import React from "react";
import { FlatList, Box, Input, InputIcon, InputField, SearchIcon, InputSlot} from "@gluestack-ui/themed";

import ChatRoom from "../json/ChatRoom.json";
import ChatRoomItem from "./ChatRoomItem";

export default ChatRoomList = () =>{
    const renderItem=({item})=><ChatRoomItem chat={item}/>;

    return(
        <FlatList

        data={ChatRoom}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index+item}
        scrollEnabled={false}

        />
    )
}