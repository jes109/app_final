import React from "react";
import {Image, Box,AlertCircleIcon,VStack,Text, FormControl,MailIcon, FormControlLabel, FormControlLabelText, Input, InputField, ScrollView, FormControlError, FormControlErrorText, FormControlErrorIcon, Center, Button, ButtonText, InputSlot, Icon } from "@gluestack-ui/themed"
import { useState,useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign"
//
import {  useSelector,useDispatch} from "react-redux"
import { selectGeneral, selectLogin } from "../redux/accountSlice";
import { setGeneralAccount,login } from "../redux/accountSlice";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

 const LoginScreen=()=>{
    const {colors}=useTheme();

    const general=useSelector(selectGeneral);
    const dispatch=useDispatch();
    const hasLogin =useSelector(selectLogin);

    const [name,setName]=useState(general.name);
    const [email,setEmail]=useState(general.email);
    const [nameIsError, setNameIsError] = useState(false);
    const [emailIsError, setEmailIsError] = useState(true);

    const nameRegex=/^[a-zA-Z]+\w*$/;
    const emailRegex=/\w{3,}@[a-zA_Z_]+\.[a-zA_Z]{2,5}/

    useEffect(()=>{
        if(!nameIsError && !emailIsError)
        dispatch(setGeneralAccount({name,email}))
        if (nameRegex.test(name)) setNameIsError(false);
        else setNameIsError(true);
        if (emailRegex.test(email)) setEmailIsError(false);
        else setEmailIsError(true);
    },[name,email])

    return(
        <Box bg="#EDF2E7" flex={1}>
            <Center mt={120} >
            <Image source={"https://github.com/jes109/App_midterm/blob/master/src/img/logo.png?raw=true"} alt="logo" w={120} resizeMode="contain"/>
            <Text py={12} fontSize={40} color="#194200">Sign in</Text>
            </Center>
        <VStack gap={20} space={2} mt={20} px={28} py={40} alignSelf="center" bg="#E0F2BB" rounded="$3xl" >
            <FormControl mb={5} isRequired w={280}>
                <Input variant="underlined">
                <InputSlot pr={12}>
                <AntDesign name="mail" size={24} color="#194200"/>
                </InputSlot>
                    <InputField 
                    placeholder="input your email"
                    value={email}
                    onChangeText={(email)=>{setEmail(email)
                    }}
                    />
                </Input>
                <FormControlError isInvalid={emailIsError}>
                    <FormControlErrorIcon as={AlertCircleIcon}/> 
                    <FormControlErrorText>You are wrong!</FormControlErrorText>
                </FormControlError>
            </FormControl>
            <FormControl mb={5} isRequired w={280}>
                <Input variant="underlined">
                <InputSlot pr={12}>
                <AntDesign name="lock1" size={24} color="#194200"/>
                </InputSlot>
                    <InputField 
                    placeholder="input your password"
                    value={name}
                    onChangeText={(name)=>{
                        setName(name)
                    }}
                    />
                </Input>
                <FormControlError isInvalid={nameIsError}>
                    <FormControlErrorIcon as={AlertCircleIcon}/> 
                    <FormControlErrorText>You are wrong!</FormControlErrorText>
                </FormControlError>
            </FormControl>
            <TouchableOpacity onPress={()=>{if(!nameIsError && !emailIsError)dispatch(login())}}>
                <Box w="$full" py={8} rounded="$full" bg="#194200" >
                <Text color="#fff" size="2xl" textAlign="center">Sign in</Text>
                </Box>
            </TouchableOpacity>
            <Text color="#707769" >Don't have an account? <Text  underline="true"  ml={8} bold="true" color="#FFC700">SIGN UP</Text></Text>
        </VStack>
        </Box>
    )
}

export default LoginScreen;