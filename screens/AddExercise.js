import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native"
import { icons } from "../constants";
import styles from "./styles/AddExercise.styles"
import { data } from "../app/exercises.js"
import ExercisesTable from "../components/AddExerciseTableCards/AddExerciseTable"
import { useState } from "react"

const AddExercise = ({navigation, route}) => {
    const [search, setSearch] = useState("")
    const [renderedList, setRenderedList] = useState(data)
    const [noData, setNoData] = useState(false)
    const { email } = route.params
    const handleSearchInput = (text) => {
        let lowerSearch = text.toLowerCase()
        console.log(lowerSearch)
        const filterData = data.filter((item) => {
            if (item.Title.toLowerCase().match(lowerSearch)){
                return item
            }
        })

        if (!lowerSearch || lowerSearch === ""){
            setRenderedList(data)
            setNoData(false)
            setSearch(lowerSearch)
        }
        else if (!filterData.length){
            setRenderedList([])
            setNoData(true)
            setSearch(lowerSearch)
        }

        else{
            setRenderedList(filterData)
            setNoData(false)
            setSearch(lowerSearch)
        }
    }

    const [selectedExercises, setSelectedExercises] = useState([])
    return (
        <SafeAreaView style={{backgroundColor: "white"}}>
            <View>
                <View style={styles.searchContainer}>
                    <Image
                    source={icons.search}
                    style={styles.image} />
                    <TextInput 
                    placeholder="Search For an Exercise"
                    placeholderTextColor="black"
                    style={styles.textInput}
                    onChangeText={text => handleSearchInput(text)}
                    />
                </View>

                <View>
                    <Text style={styles.allExercises}>All Exercises</Text>
                    <ExercisesTable data={renderedList} selectedExercises={selectedExercises} setSelectedExercises={setSelectedExercises}/>
                    
                    <TouchableOpacity style={[styles.add, {backgroundColor: selectedExercises.length == 0 ? "white" : "#5fc9f8"}]}
                    onPress={() => navigation.navigate("CreateWorkout", {selectedExercises: selectedExercises, email: email})} 
                    >
                        <Text style={styles.addText}>Add {selectedExercises.length} Exercises</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default AddExercise;