import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./WorkoutCard.style"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { useEffect, useState } from "react"


const WorkoutCard = ( {item, onPress, rating, author, data, navigation} ) => { 

    const [url, setUrl] = useState("")
    const func = async () => {
        const storage = getStorage();
        const reference = ref(storage, "images/"+data.url)
        const downloadUrl = await getDownloadURL(reference);
        setUrl(downloadUrl)
    };

    useEffect(() => {
        func();
    }, [url]);
    
    const pressButton = () => {
        navigation.navigate("My Workouts",
        {screen: "WorkoutScreen", 
        params: {
            data: data,
            title: title
        }})
    }
    
    return ( 
        <View style={styles.container}>
        <TouchableOpacity onPress={() => pressButton()}>
            <View style={styles.imageContainer}>
                <Image 
                source={{uri: url}}
                style={styles.cardImg}
                />
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item}</Text>
                <Text style={styles.title}>Rating: {rating}</Text>
            </View>
            <View>
                <Text style={styles.title}>Created by: {author}</Text>
                </View>
        </TouchableOpacity>
        </View>
    )
}

export default WorkoutCard;