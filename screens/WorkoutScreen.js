import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from "react-native"
import styles from "./styles/WorkoutScreen.styles"
import Exercise from "../components/Exercise/Exercise"

const WorkoutScreen = ({navigation, route}) => {
    const { data, title, email, username } = route.params
    console.log(data)
    const url = data["url"]
    delete data['url']

    const finished = () => {
        navigation.navigate("Home Screen", {email: email, username: username})
    }
    return (
        <SafeAreaView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {title} </Text>
            </View>

            <View style={styles.exerciseContainer}>
                <FlatList
                data={Object.keys(data)}
                renderItem={({ item }) => (
                    <Exercise
                    exercise={item}
                    data={data[item]}
                     />
                
                )}
                 />
            </View>

            <View style={styles.finishedContainer}>
                <TouchableOpacity style={styles.finishedBtn} onPress={() => finished()}>
                    <Text style={styles.finishedText}>
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default WorkoutScreen;