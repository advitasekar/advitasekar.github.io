
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBGlUVc29evj0MdCwDJwR13JIr1W_0Gs7k",
  authDomain: "react-notes-ad73a.firebaseapp.com",
  projectId: "react-notes-ad73a",
  storageBucket: "react-notes-ad73a.appspot.com",
  messagingSenderId: "448964460969",
  appId: "1:448964460969:web:a657b206a7388f4b5ec4b8",
  measurementId: "G-BXZXHGCEP6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const notesCollection = collection(db,"notes")


