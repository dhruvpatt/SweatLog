import { View, Text, TouchableOpacity, FlatList } from "react-native"
import styles from "./UserWorkouts.style"
import UserWorkoutCards from './UserWorkoutCards'
import { SIZES } from "../../constants"
import { useEffect, useState } from "react"


const UserWorkouts = (workouts) => {

    // console.log(workouts)
    // console.log("UserName: " + workouts.userName
   const wrkOuts = workouts.workouts[0]
   const navigation = workouts.workouts[2]
   const email = workouts.workouts[3]

//    const pressWorkout = () => {
//     console.log("Press Workout")
//     navigation.navigate("Workout Screen")
//    }
    return( 
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Your Workouts</Text>
                <TouchableOpacity onPress={() => navigation.navigate("My Workouts",
                {screen: "Workouts",
                params: {
                    email: email
                }})}>
                    <Text style={styles.headerBtn}>Show All</Text>
                </TouchableOpacity>
            </View>

            <View>
            <FlatList
                data={Object.keys(wrkOuts)}                                                 
                renderItem={({ item }) => (
                    <UserWorkoutCards
                    title={ item }
                    data={wrkOuts[item]}    
                    userName={workouts.workouts[1]}
                    email={workouts.workouts[3]}
                    navigation={navigation}
                    />
                )}
                contentContainerStyle={{columnGap: SIZES.medium}}
                horizontal />
            </View>

        </View>
    )
}

export default UserWorkouts;