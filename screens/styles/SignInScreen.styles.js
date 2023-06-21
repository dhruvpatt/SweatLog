import { StyleSheet } from "react-native";
import { SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },

    title: {
        fontSize: 50,
        color: "white",
        fontFamily: FONT.bold 
    },
    
    subtitle: {
        fontSize: 30,
        color: "white",
        fontFamily: FONT.medium
    },

    titleContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    signInBtn: {
        justifyContent: "flex-end",
        marginTop: "140%"
    }

});

export default styles;