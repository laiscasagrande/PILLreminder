import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

export const createNewRemedy = async () => {
    try {
      const docRef = await addDoc(collection(db, "remedy"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


