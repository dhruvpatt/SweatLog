import { StyleSheet } from "react-native"
import { SIZES, FONT, COLORS } from "../../constants"

const styles = StyleSheet.create({
    cardContainer: {
        width: 300,
        height: 200,
        justifyContent: "center",
        alignItems: "center",  
    },

    cardImg: {
        width: "95%",
        height: "100%",
        borderRadius: 15
    },

    descriptionTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 4,
        marginLeft: 15,
        marginRight: 15
    },

    title: {
        color: COLORS.primary,
        fontSize: SIZES.large,
        fontFamily: FONT.bold
    },

    author: {
        color: COLORS.gray,
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        marginLeft: 15,
        marginRight: 15,
    }



})

export default styles