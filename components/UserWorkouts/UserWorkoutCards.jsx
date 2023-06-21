import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./UserWorkoutCards.style"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { useState, useEffect } from "react"


const UserWorkoutCards = ( { title, data, userName, navigation, email }) => {

    const [url, setUrl] = useState("")
    const func = async () => {
        const storage = getStorage();
        const reference = ref(storage, "images/"+data.url);
        const downloadUrl = await getDownloadURL(reference);
        setUrl(downloadUrl);
    };

    useEffect(() => {
        func();
    }, [url]);

    const pressButton = () => {
        navigation.navigate("WorkoutScreen", {data: data, title: title, email: email, username: userName})
        console.log("Press button pressed");
    }

    return(
        <TouchableOpacity onPress={() => pressButton()}>
            {/* Workout Image */}
            <TouchableOpacity 
            style={styles.cardContainer}
            onPress={() => pressButton()}>
                <Image
                source={{uri: url}}
                style={styles.cardImg} />
            </TouchableOpacity>
            {/* Description of Workout */}
            <View>
                <View style={styles.descriptionTitle}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>Rating</Text>
                </View>
                <Text style={styles.author}>{userName}</Text>

            </View>
        </TouchableOpacity>

    )
}

export default UserWorkoutCards;