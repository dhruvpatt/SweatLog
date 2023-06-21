import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MyWorkouts from "../screens/MyWorkouts";
import SignInScreen from "../screens/SignInScreen";
import WorkoutScreen from "../screens/WorkoutScreen"
import { COLORS, images } from "../constants"
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn.jsx"; 
import * as WebBrowser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react"

// ios 680900804080-g2nqudhefnmjikv0km49aotqt2huvuet.apps.googleusercontent.com
// android 680900804080-vvldb4l4lt2uqjmcu63hqss6h0ci0o2r.apps.googleusercontent.com
const Stack = createNativeStackNavigator()


const App = () => {

    // const [userInfo, setUserInfo] = useState(null);
    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     expoClientId: "680900804080-gvck05due7at9fmm0qaqg9v0r5tgim3c.apps.googleusercontent.com",
    //     androidClientId: "680900804080-vvldb4l4lt2uqjmcu63hqss6h0ci0o2r.apps.googleusercontent.com",
    //     iosClientId: "680900804080-g2nqudhefnmjikv0km49aotqt2huvuet.apps.googleusercontent.com"
    // }) 
    // let initialRender = "Sign In Screen"

    // useEffect(() => {
    //     handleSignInWithGoogle();
    // },[response])

    // async function handleSignInWithGoogle(){
    //     console.log("Runs")
    //     const user = await AsyncStorage.getItem("@user");
    //     if (!user){
    //         initialRender = "Sign In Screen"
    //         if (response?.type === "success") {
    //             await getUserInfo(response.authentication.accessToken);
    //         }
            
    //     }
    //     else{
    //         initialRender = "Home Screen"
    //         setUserInfo(JSON.parse(user));
    //     }
    // }
    
    // const getUserInfo = async (token) => {
    //     if (!token) return;
    //     try {
    //         const response = await fetch("https://googleapis.com/userinfo/v2/me",
    //         {
    //             headers: { 'Authorization': `Bearer ${token}`},
    //         }
    //         );
    //         const user = await response.json();
    //         await AsyncStorage.setItem("@user", JSON.stringify(user));
    //         setUserInfo(user);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


    return(
        <Stack.Navigator initialRouteName="Sign In Screen" screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name="Home Screen"
            component={HomeScreen}
            options={{ 
            headerStyle: {
                backgroundColor: COLORS.lightWhite
            },
            headerShadowVisible: false,
            
            }}
             />
            <Stack.Screen 
            name="Sign In Screen"
            component={SignInScreen}/>
            <Stack.Screen
            name="My Workouts"
            component={MyWorkouts} />
            <Stack.Screen 
            name="WorkoutScreen"
            component={WorkoutScreen} />

        </Stack.Navigator>
    )
}

export default App;