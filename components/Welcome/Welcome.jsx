import React from "react";
import styles from "./welcome.style"
import { View, TextInput, Text, Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../../constants";


const Welcome = ({name}) => { 

    const replaced = name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return ( 
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello {replaced}!</Text> 
                <Text style={styles.welcomeMessage}>Find your Perfect Workout</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                    style={styles.searchInput}
                    value=''
                    onChange={() => {}}
                    placeholder="Find your perfect workout"
                    placeholderTextColor='black' />
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={()=> {}}>
                    <Image 
                    source={icons.search}
                    resizeMode="contain"
                    style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome
