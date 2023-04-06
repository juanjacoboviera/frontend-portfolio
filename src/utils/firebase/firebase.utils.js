import {initializeApp} from "firebase/app";
import {getFirestore, doc, getDoc ,setDoc, collection, writeBatch, addDoc, query } from "firebase/firestore"
import { english, espanol } from "../../db";
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
    const colletctionRef = collection(db, 'languages');

    for (let object of english){
        const docRef = await addDoc(colletctionRef, object)
        console.log("done!")
    }
  }

  // export const getProfileData =  async(data) =>{
  //   const colletctionRef = collection(db, 'juanjacoboviera');
  //   const q = query(colletctionRef)

  //   const querySnapshot = await getDocs(q)
  //   const data = querySnapshot.docs.map((doc) => doc.data());
  //   return data;

  // }

export async function getDocument(collectionName, docId) {
  const docRef = doc(db, collectionName, docId)
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists) {
    const docData = { id: docSnapshot.id, ...docSnapshot.data() };
    console.log(`Retrieved document with ID ${docId} from ${collectionName}`);
    return docData;
  } else {
    console.log(`Document with ID ${docId} not found in ${collectionName}`);
    return null;
  }
}