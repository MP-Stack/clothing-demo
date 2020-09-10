import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAw62R32QHZQkgF6yJj2AuCCoq9LBk7ycw",
  authDomain: "clothing-db-47f15.firebaseapp.com",
  databaseURL: "https://clothing-db-47f15.firebaseio.com",
  projectId: "clothing-db-47f15",
  storageBucket: "clothing-db-47f15.appspot.com",
  messagingSenderId: "533548110825",
  appId: "1:533548110825:web:a218163b111a123a647178",
  measurementId: "G-QBL5GQXYFH"
};

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log(error.message);
      }
    };
    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach(obj =>{
      const newDocRef = collectionRef.doc();
      // console.log(newDocRef);
      batch.set(newDocRef,obj)
    });
    return await batch.commit()
  };

  export const convertCollectionsSnapshotToMap = (collections) =>{
    const transformedCollection = collections.docs.map(doc=>{
      const {title,items} = doc.data();
   
    return {
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  });
  console.log(transformedCollection)
    return transformedCollection.reduce((accumulator,collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{});
  }
  
  export const getCurrentUser =() =>{
    return new Promise((resolve,reject)=>{
      const unsubscribe = auth.onAuthStateChanged(userAuth=>{
        unsubscribe();
        resolve(userAuth);
      },reject)
    })
  }

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
 
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider)

export default firebase;