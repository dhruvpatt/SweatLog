import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import  Header  from '../components/Header/header.jsx'
import Welcome from "../components/Welcome/Welcome.jsx";
import { COLORS, icons, images, SIZES } from '../constants'
import PopularWorkouts from "../components/PopularWorkouts/PopularWorkouts.jsx";
import UserWorkouts from "../components/UserWorkouts/UserWorkouts.jsx";
import BottomNavBar from "../components/BottomNavBar/BottomNavBar.jsx";
import { useState, useEffect } from "react"
import { collection, getDoc, doc} from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"


const HomeScreen = ( {navigation, route} ) => {
    
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [userWorkouts, setUserWorkouts] = useState({});

    
    console.log(userWorkouts)
    const getData = async (emailAddress) => {
        console.log("getData function called")
        console.log(emailAddress)
        const docRef = doc(db, "users", emailAddress)
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()){
            setUserWorkouts(docSnap.data());
            
        }
    }

    useEffect(() => {
        if (userName === undefined || userName === ""){
            console.log("running")
            const { userInfo } = route.params
            setUserName(userInfo.name)
            setEmail(userInfo.email)
            getData(userInfo.email)
        }

    },[userName, userWorkouts])
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Header />

            <View>
                <Welcome name={userName} />
            </View>

            <ScrollView>
                <PopularWorkouts />
                <UserWorkouts workouts={[userWorkouts, userName, navigation, email]}/>
            </ScrollView>

            <BottomNavBar navigation={navigation} email={email}  /> 

            

        </SafeAreaView>

    )

}

export default HomeScreen;