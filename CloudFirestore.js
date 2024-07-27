import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service

export const createNewRemedy = async (remedyData) => {
  try {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "remedy"), {
      name: remedyData.name,
      dosage: remedyData.dosage,
      period: remedyData.period,
      time: remedyData.time
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}



// export const querySnapshot = await getDocs(collection(db, "remedy"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });


