import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center', 
        fontSize: SIZES.xLarge,
        fontFamily: FONT.bold,
        color: COLORS.primary,
        marginTop: 10
    },

    topContainer: {
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    
    topTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.bold,
    },

    workoutButton: {
        padding: 5,
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20
        
    },
    nav: {
        marginTop: 'auto'
    }
})

export default styles