import { StyleSheet } from "react-native"
import { COLORS, SIZES, FONT } from "../../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    title: {
       fontSize: SIZES.xLarge,
       marginTop: 5,
       alignSelf: "center",
       color: COLORS.gray
    }, 
    titleContainer: {
        borderBottomColor: COLORS.gray, 
        borderBottomWidth: 0.5,
        paddingBottom: 15,
        marginTop: 10
    },

    exerciseDesc: {
        alignSelf: "center",
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
        color: COLORS.gray, 
        marginTop: 15
    },

    addExerciseBtn: { 
        alignSelf: "center",
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: "#82CD47",
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 5
    }, 
    exercises: {
        height: "70%"
    },

    createWorkoutContainer: {
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "space-between",
        marginTop: "auto"
    },
    createWorkoutBtn: {
        padding: 10,
        backgroundColor: "#82CD47",
        paddingRight: "5%",
        paddingLeft: "5%",
        borderRadius: 15,
    },
    
    createWorkoutText: {
        fontSize: SIZES.medium,
        fontFamily: FONT.bold
    }


})

export default styles