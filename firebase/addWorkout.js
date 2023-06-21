import { db } from "./firebaseConfig"
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore"

const addWorkout = async (workout, email) => {
    console.log(workout)
    console.log(email)

    const docRef = doc(db, "users", email)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {

        await setDoc(docRef, workout, {merge: true});
    }

    else{
        await setDoc(doc(db, "users", email), workout);
    } 
}


export default addWorkout;