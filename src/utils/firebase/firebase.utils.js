import {initializeApp} from "firebase/app";
import {getFirestore, doc, getDocs ,setDoc, collection, writeBatch, addDoc, query, } from "firebase/firestore"
import { juanJacoboViera } from "../../db";
const firebaseConfig = {
    apiKey: "AIzaSyAxgb0bOIkWnj5FsXzpgW5OGtKATr6NDWk",
    authDomain: "portafolio-jjv.firebaseapp.com",
    projectId: "portafolio-jjv",
    storageBucket: "portafolio-jjv.appspot.com",
    messagingSenderId: "196850944733",
    appId: "1:196850944733:web:9cded11d65883b795fa934"
  };
  
  // Initialize Firebase
  const fireBaseApp = initializeApp(firebaseConfig);

  export const db = getFirestore();

  export const addCollectionAndDocuments =  async () =>{
    const colletctionRef = collection(db, 'juanjacoboviera');

    for (let object of juanJacoboViera){
        const docRef = await addDoc(colletctionRef, object)
        console.log("done!")
    }
  }

  export const getProfileData =  async() =>{
    const colletctionRef = collection(db, 'juanjacoboviera');
    const q = query(colletctionRef)

    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;

  }