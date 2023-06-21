import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../constants"

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        marginTop: 10
    },

    imageContainer: {
        height: 200,
        width: 300,
    },

    cardImg: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    },

    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    
    title: {
       fontFamily: FONT.bold,
       fontSize: SIZES.medium, 
       color: COLORS.secondary
    }
    
});

export default styles
