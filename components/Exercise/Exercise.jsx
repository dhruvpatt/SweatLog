import { View, Text, TouchableOpacity } from "react-native";
import Set from "./Set";
import styles from "./styles/Exercise.styles"

const Exercise = ({exercise, data}) => { 
    const exerciseData = data[0]
    console.log(exerciseData)
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.exerciseTitle}> {exercise} </Text>
            </View>

            <View style={styles.subHeader}>
                <Text style={styles.set}>SET</Text>
                <Text style={styles.lbs}>LBS</Text>
                <Text style={styles.reps}>REPS</Text>
            </View>

            <View>
                {Object.keys(exerciseData).map((key) => (
                    <Set
                    key={key}
                    number={key}
                    repsArr={exerciseData[key]} />

                ))}
            </View>
        </View>

    )
}

export default Exercise;