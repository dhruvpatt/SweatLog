import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "2%",
    },

    number: {
        marginLeft: "3%"
    },
    

    lbs: {
        marginLeft: "5%",
        padding: 8
    },

    reps:{
        marginLeft: "1%",
        padding: 8
    },

    checkBtn: {
        padding: 8,
        backgroundColor: "#F45050",
        borderRadius: 10

    },

    trash: { 
        height: 20,
        width: 20
    }


})

export default styles;