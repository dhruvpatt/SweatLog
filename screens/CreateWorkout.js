import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from "react-native"
import styles from "./styles/CreateWorkoutScreen.styles"
import { useState, useEffect } from "react"
import ExerciseCard from "../components/Workout/ExerciseCard"
import addWorkout from "../firebase/addWorkout"
import * as ImagePicker from "expo-image-picker"
// import uploadImageAsync from "../firebase/getBlobForUri"
import { getStorage, ref, uploadBytes } from "firebase/storage"
// import uploadImage from "../firebase/addImage"

const CreateWorkout = ({ navigation, route }) => {

    const [userEmail, setUserEmail] = useState("")
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    

    const pickImage = async () => { 
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        console.log(result)

        setImage(result.assets[0].uri)
        const storage = getStorage()
        const url = "img-"+ new Date().getTime()+".jpg";
        const imgRef = ref(storage, "images/"+url)
        const img = await fetch(result.assets[0].uri)
        const bytes = await img.blob()

        await uploadBytes(imgRef, bytes);

        setImageUrl(url)



        // await uploadImageAsync(result.assets[0].uri, url);
    //     const blob = getBlobForUri(result.assets[0].uri)
    //     const url = "img-" + new Date().getTime();
    // //     // setImageUrl(url);
    //     console.log("Image Blob Created")
    //     // uploadImage(blob, url);
    //     console.log("upload image function completed")
    }

    function arraysEqual(arr1, arr2) {
        console.log(arr1)
        console.log(arr2)
        if (arr1.length !== arr2.length) {
          return false;
        }
      
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
            return false;
          }
        }
      
        return true;
      }

      function contains(arr1, arr2) {
        for (let i = 0; i < arr2.length; i++){
            if (arr1.includes(arr2[i])){
                return true;
            }
        }

        return false;

      }

    const [exercises, setExercises]  = useState([])
    const [workout, setWorkout] = useState({})
    const [title, setTitle] = useState("My Workout")

    const renderItem = ( {item} ) => { 
        return(
            <ExerciseCard 
            item={item} 
            setWorkout={setWorkout} 
            workout={workout}  />
        )
    }


    
    useEffect(() => {
        let { selectedExercises, email } = route.params
        setUserEmail(email)
        console.log(userEmail)
        if (typeof route.params !== "undefined"){
            if (selectedExercises !== "undefined"){
                if (arraysEqual(selectedExercises, exercises) == false && contains(exercises, selectedExercises) == false){
                    setExercises([...exercises, ...selectedExercises])
                }
        }
            
        }
    },[route, userEmail]);

    const sendData = () => {
        if (imageUrl !== undefined){
        workout["url"] = imageUrl
        const workoutWithTitle = {[title]: workout}
        console.log("User Email is " + userEmail )
        addWorkout(workoutWithTitle, userEmail);
        navigation.navigate("Workouts")
        }
        else{ 
            alert("Please Upload an Image for the Workout")
        }
    }

    const navToAddExercise = () => {

        navigation.navigate("Add Exercise", {email: userEmail})
    }
    return( 
        <SafeAreaView style={[{backgroundColor: "white"}, styles.container]}>
            <View style={styles.titleContainer}>
                <TextInput
                placeholder="Workout Title"
                style={styles.title}
                onChangeText={text => setTitle(text)}
                />
            </View>
            <View>
                <Text style={styles.exerciseDesc}>Start by adding an exercise</Text>
                <TouchableOpacity 
                style={styles.addExerciseBtn}
                onPress={() => navToAddExercise()}>
                    <Text>Add Exercise</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.exercises}>
                <FlatList
                data={exercises}
                renderItem={renderItem}
                automaticallyAdjustKeyboardInsets={true}
                />

            </View>

            <View style={styles.createWorkoutContainer}>
                <TouchableOpacity style={[styles.createWorkoutBtn, {marginLeft: "8%"}]} onPress={() => pickImage()}>
                    <Text style={styles.createWorkoutText}>Add Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.createWorkoutBtn, {marginRight: "8%"}]} onPress={sendData}>
                    <Text style={styles.createWorkoutText}>Create Workout</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default CreateWorkout;