import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlNlbwM9EJHPsLnwWqJhGUd-9enlSTYuU",
  authDomain: "user-signup-ad0b6.firebaseapp.com",
  projectId: "user-signup-ad0b6",
  storageBucket: "user-signup-ad0b6.appspot.com",
  messagingSenderId: "418716135113",
  appId: "1:418716135113:web:10a032ca8cd26532e86718"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
export { app, db, auth, storage };