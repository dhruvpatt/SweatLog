import { StyleSheet } from "react-native";
import { SIZES, FONT, COLORS } from "../../constants";


const styles = StyleSheet.create({
    textInput: {
        fontSize: SIZES.large,
        width: "87%",
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        paddingRight: "32%",
        backgroundColor: COLORS.lightGrey,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 8,
    },
    
    image: {
        height: 44,
        width: 44,
        marginTop: 15,
        backgroundColor: COLORS.lightGrey,
        borderBottomLeftRadius:8,
        borderTopLeftRadius: 8
    },

    allExercises: {
        color: COLORS.gray,
        marginTop: 10,
        marginLeft: 8,
        fontSize: SIZES.large,
        marginBottom: 5
    },
    add: {
        alignItems: "center",
        padding: 10,
        marginTop: 15,
        marginLeft: "15%",
        marginRight: "15%",
        borderRadius: 20
        
    },

    addText: {
        textAlign: "center"
    }

})

export default styles