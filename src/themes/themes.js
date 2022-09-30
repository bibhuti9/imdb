import { Dimensions } from "react-native"
const { width, height } = Dimensions.get('window');
export const COLORS = {
    primary: "#f5c518",
    white: "#FFF",
    black: "#000",
    gray1: "#FFFFFFB3",
    backgroundColor: "#121212"
}
export const SIZES = {
    padding1: 10,
    margin1: 10,
    radious: 20,
    width,
    height
}
export const textSize = {
    S: 15,
    M: 20,
    L: 25,
    XL: 30
}

export const commonStyle = {
    iconStyle: {
        width: 20,
        height: 20
    }
}