import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import { icons } from "../../constants";
import styles from "./styles/Set.styles";
import { useState } from "react"

const Set = ({number, repsArr}) => {
    // #79B987

    const [completed, setCompleted] = useState("grey")
    const completePressed = () => {
        if (completed === "grey") {
            setCompleted("#79B987")
        }
        else{
            setCompleted("grey")
        }
        
    }
    const reps = repsArr[1]
    const weight = repsArr[0]
    return (
        <View style={styles.setContainer}>
            <Text>{number}</Text>
            <TextInput placeholder={weight} />
            <TextInput placeholder={reps} />
            <TouchableOpacity style={[styles.completeButton, {backgroundColor: completed}]} onPress={() => completePressed()}>
                <Text>√</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Set;