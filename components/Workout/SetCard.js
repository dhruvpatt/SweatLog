import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import styles from "./SetCard.style"
import { useState, useEffect } from "react"
import { icons } from "../../constants";

const SetCard = ( { number, deleteSet, setExerciseSets, exerciseSets } ) => {

    const [set, setSet] = useState(["0","0"])

    const handleOnChangeWeight = (text) => {
        let updatedList = [...set]
        updatedList[0] = text
        setSet(updatedList)

    } 
    const handleOnChangeReps = (text) => {
        let updatedList2 = [...set]
        updatedList2[1] = text
        setSet(updatedList2)

    }

    useEffect(() => {
        if (set[0] != "0" && set[1] != "0"){
            setExerciseSets({...exerciseSets, [number]: set})
        }
    },[set]);

    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
            <TextInput placeholder="0" style={styles.lbs} 
            placeholderTextColor="grey"
            onChangeText={text => handleOnChangeWeight(text)}/>
            <TextInput placeholder="10" style={styles.reps} 
            placeholderTextColor="grey"
            onChangeText={text => handleOnChangeReps(text)}/>
            <TouchableOpacity style={styles.checkBtn} onPress={() => deleteSet(number)}>
                <Image source={icons.TrashCan} style={styles.trash}/>
            </TouchableOpacity>
        </View>       
    )
}

export default SetCard;