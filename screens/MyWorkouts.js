import { createStackNavigator } from "@react-navigation/stack";
import CreateWorkout from "./CreateWorkout"
import Workouts from "./Workouts"
import AddExercise from "./AddExercise";
import WorkoutScreen from "./WorkoutScreen"


const Stack = createStackNavigator()
const MyWorkouts = ({route}) => {
    const { email } = route.params
    return (
        <Stack.Navigator initialRouteName="Workouts" screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name="Workouts"
            component={ Workouts }
            initialParams={{email: email}} />
            <Stack.Screen
            name="CreateWorkout"
            component={ CreateWorkout } />
            <Stack.Screen 
            name="Add Exercise"
            component={ AddExercise } />
            <Stack.Screen
            name="WorkoutScreen"
            component={WorkoutScreen } />
        </Stack.Navigator>
    )

}

export default MyWorkouts;