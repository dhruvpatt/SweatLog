import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Button, ImageBackground, Image} from "react-native"
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google"
import { useState, useEffect } from "react"
import { image, google } from "../constants/images.js";
import { Dimensions } from "react-native";
import  styles from "./styles/SignInScreen.styles"

WebBrowser.maybeCompleteAuthSession();

const SignInScreen = ({navigation, route}) =>{

    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const { width, height } = Dimensions.get("window") 

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: "Add WebClientId",
        androidClientId: "Add AndroidClientId",
        iosClientId: "Add IosClientId"
    });

    useEffect(() => {
        if (response?.type === "success") {
        setToken(response.authentication.accessToken);
            if (userInfo === null) {
            getUserInfo(response.authentication.accessToken);
            }
        }

        if (userInfo !== null){
            console.log("User info: ")
            console.log(userInfo)
            navigation.navigate("Home Screen", {userInfo: userInfo});
        }
    }, [response, token, userInfo]);

    const getUserInfo = async (authToken) => {
        try {
        const response = await fetch(
            "https://www.googleapis.com/userinfo/v2/me",
            {
            headers: { Authorization: `Bearer ${authToken}` },
            }
        );

        const user = await response.json();
        setUserInfo(user);
        } catch (error) {
        // Add your own error handler here
        }
    };

    return (
       <View style={[styles.containerMain, {height: height}]}>
            <ImageBackground source={image} style={{width: width, height: height}}>
                <SafeAreaView style={styles.titleContainer}>
                    <Text style={styles.title}>SweatLog</Text>
                    <Text style={styles.subtitle}>Fitness Simplified</Text>
                </SafeAreaView>

                <View>
                    <TouchableOpacity 
                    style={styles.signInBtn}
                    disabled={!request}
                    onPress={() => {
                        promptAsync();
                    }}>
                        <Image source={google} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SignInScreen;


