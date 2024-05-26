import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary800:"pink",
        primary500:"green",
        primary200:"white",
        primaryContainer:"black",
        primaryContainerDisable:"orange",
        card:"purple",
        surface:"yellow",
        lightsurface:"gray",
        midsurface:"black",
        darksurface:"blue",
        header:"brown",
        focus:"lightgray",
    }
}

export default MyTheme;