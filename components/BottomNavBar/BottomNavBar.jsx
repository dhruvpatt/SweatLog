import { View, Text, TouchableOpacity, Image} from "react-native";
import { createIconSetFromFontello } from "react-native-vector-icons";
import styles from "./BottomNavBar.styles"
import { useEffect, useState } from "react"


const BottomNavBar = ({navigation, email}) => { 

    return ( 
        <View style={styles.navBarContainer}>
            <TouchableOpacity style={styles.iconContainer} 
            onPress={() => navigation.navigate("Home Screen")}
            >
                <Image 
                source={require("../../assets/icons/home.png")}
                style={styles.iconStyle}
                />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} 
            onPress={() => navigation.navigate("My Workouts", 
            {email: email})}
            
            >
                <Image 
                source={require("../../assets/icons/barbell.png")}
                style={styles.iconStyle}
                 />
                <Text>My Workouts</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNavBar;