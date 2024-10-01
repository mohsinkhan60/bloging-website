import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// User signup function
export const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name: name,
      email: email,
      isAdmin: false,
    });
  } catch (error) {
    console.log(error);
  }
};

// User login function
export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// User logout function
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("Error during sign out:", error);
  }
};

// Function to handle creating a listing
export const handleCreateListing = async (
  image,
  title,
  author,
  description,
  category,
  tags
) => {
  try {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${image.name}`);
    const uploadResults = await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(uploadResults.ref);
    await addDoc(collection(db, "user"), {
      title,
      author,
      description,
      category,
      tags,
      imageURL: uploadResults.ref.fullPath,
    });

    console.log("Listing created successfully with image:", imageURL);
  } catch (error) {
    console.error("Error creating listing:", error);
  }
};

export const listAllUsers = () => {
  return getDocs(collection(db, "user"));
};

export const getImageURL = (path) => {
  return getDownloadURL(ref(storage, path));
};

export const getUserById = async (id) => {
  const docRef = doc(db, "user", id);
  const result = await getDoc(docRef);
  return result;
};

export default { auth, db, signup, login, logout };
