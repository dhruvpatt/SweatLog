import { View, FlatList, TouchableOpacity, Text, SafeAreaView } from "react-native"
import { SIZES } from "../constants";
import WorkoutCard from "../components/WorkoutCard/WorkoutCard"
import styles from "./Workouts.styles"
import BottomNavBar from "../components/BottomNavBar/BottomNavBar";
import { Dimensions } from "react-native";
import { doc, getDoc } from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { db } from "../firebase/firebaseConfig" 
import { useEffect, useState } from "react"

const Workouts = ( { navigation, route }) => {

    const [workouts, setWorkouts] = useState({})
    const { width, height } = Dimensions.get("window") 
    const { email } = route.params

    // First we must get the workouts and images from firebase. 
    const getData = async () => { 
        const docRef = doc(db, "users", email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()){
            setWorkouts(docSnap.data())
        }
        else{
            console.log("That user doesn't have any workouts")
        }
    };

    useEffect(() => {
        getData(email)
    },[])


    return (
        <SafeAreaView style={{backgroundColor: "white", width: width, height: height}} >
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.workoutButton} onPress={() => navigation.navigate("CreateWorkout", {email: email, selectedExercises: []})}>
                    <Text style={styles.topTitle}>Create a Routine</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.workoutButton}>
                    <Text style={styles.topTitle}>Quick Start</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.title}>My Workouts</Text>
                <FlatList 
                data = {Object.keys(workouts)}
                renderItem={({ item }) => (
                    <WorkoutCard
                    item={ item }
                    onPress={() => {}}
                    data={workouts[item]}
                    rating="5"
                    author={"Me"}
                    navigation={navigation}
                     />
                )}
                // contentContainerStyle={{paddingBottom: 50}}
                style={{height: "80%"}}
                 />
            </View>
            <View style={styles.nav}>
                <BottomNavBar navigation={navigation}/>
            </View>
        </SafeAreaView>
    )

}

export default Workouts;