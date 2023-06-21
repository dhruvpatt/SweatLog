import { StyleSheet } from "react-native"; 
import { SIZES, FONT } from "../../constants/theme"

const styles = StyleSheet.create({

    title: {
        fontSize: 30
    },

    titleContainer: {
        alignItems: "center",
        marginTop: "3%"
    },
    exerciseContainer: {
        height: "88%"
    },

    finishedText: {
        fontSize: SIZES.large,
        padding: 5,
        paddingHorizontal: "15%"
    },

    finishedContainer: {
        alignItems: "center",
        justifyContent: "center",
    },

    finishedBtn: {
        marginTop: "5%",
        backgroundColor : "#79B987",
        borderRadius: 10
    }


});

export default styles;