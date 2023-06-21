import { db, storage } from "./firebaseConfig"
import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage"

const uploadImage = async (image, imageUrl) => { 
    console.log("Function running")
    console.log(image)
    const storage = getStorage();
    const imageRef = ref(storage, "images/"+imageUrl);
    uploadBytes(imageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            console.log(url)
        })
    });

};

export default uploadImage;