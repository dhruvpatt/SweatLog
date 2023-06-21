import { StyleSheet } from "react-native"
import { SIZES, FONT, COLORS } from "../../constants"

const styles = StyleSheet.create({
    title: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium
    },
    
    bodyPart: {
        color: COLORS.gray,
        fontSize: SIZES.medium,
    },

    ecCont: {
        marginLeft: "20%",
        marginBottom: "5%"
    }

});

export default styles; 