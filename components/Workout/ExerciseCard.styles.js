import { StyleSheet } from "react-native";
import { FONT, SIZES } from "../../constants"

const styles = StyleSheet.create({
    title: {
        fontSize: SIZES.medium,
        textAlign: "center",
        marginTop: 10,
        fontFamily: FONT.bold
    },

    subHeader: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10
    },

    set: {
        marginLeft: "15%" 
    }, 
    
    lbs: {
        marginLeft: "16%"
    },

    reps: {
        marginLeft: "14%"
    },

    addSetBtn: {
        paddingTop: 5, 
        paddingBottom: 5, 
        paddingLeft: "15%",
        paddingRight: "15%",
        alignSelf: "center",
        backgroundColor: "lightblue",
        borderRadius: 20
    },

    addSet: {
        fontSize: SIZES.small,
        fontFamily: FONT.medium
    }
});

export default styles;