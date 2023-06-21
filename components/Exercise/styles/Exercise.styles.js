import { StyleSheet } from "react-native"
import { FONT, SIZES } from "../../../constants/theme"

const styles = StyleSheet.create({

    subHeader: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10
    },
    titleContainer: {
        marginTop: "2%"
    },

    set: {
        marginLeft: "9%" 
    }, 
    
    lbs: {
        marginLeft: "17%"
    },

    reps: {
        marginLeft: "18%"
    },

    exerciseTitle: {
        fontSize: SIZES.large
    },

});

export default styles;