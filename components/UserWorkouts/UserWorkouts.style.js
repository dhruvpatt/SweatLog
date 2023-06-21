import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../constants"

const styles = StyleSheet.create({
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginLeft: "2%",
        marginTop: "2%"
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center"
    },

    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
        marginRight: "5%",
        marginTop: "2%"
      }

})

export default styles