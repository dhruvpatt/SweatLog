import { View, Text, TouchableOpacity, ScrollView} from  "react-native";
import styles from "./ExerciseCard.styles";
import SetCard from "./SetCard";
import { useState, useEffect } from "react"


const ExerciseCard = ({item, setWorkout, workout}) => {

    const [numSets, setNumSets] = useState(0)
    const handleAddSet = () => {
        setNumSets(numSets + 1);
    }
    
    const deleteSet = (num) => {
        setNumSets(numSets - 1);
        const { [num]: value, ...newExerciseSets} = exerciseSets
        setExerciseSets(newExerciseSets); 

    }


    const [exerciseSets, setExerciseSets ] = useState({})
    
    useEffect(() =>{
        let exercise = [exerciseSets]
        setWorkout({...workout, [item]: exercise})
    },[exerciseSets])

    return ( 
        <View>
            {/* This Could Become a Button that tracks your progress over time */}
            <View>
            <Text style={styles.title}>{item}</Text>
            </View>

            <View style={styles.subHeader}>
                <Text style={styles.set}>SET</Text>
                <Text style={styles.lbs}>LBS</Text>
                <Text style={styles.reps}>REPS</Text>
            </View>
            
            <View>
                {[...Array(numSets)].map((_,i) => (

                    <SetCard 
                    number={i+1} 
                    previous={0} 
                    key={i} 
                    deleteSet={deleteSet} 
                    setExerciseSets={setExerciseSets}
                    exerciseSets={exerciseSets}/>
                ))}
            </View>
            <View>
                <TouchableOpacity style={styles.addSetBtn} onPress={handleAddSet}>
                    <Text style={styles.addSet}>Add Set</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
};

export default ExerciseCard