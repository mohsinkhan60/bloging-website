// import { getAuth, deleteUser as firebaseDeleteUser } from "firebase/auth";
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
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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
  tags,
  content,
  date
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
      content,
      date,
    });

    console.log("Listing created successfully with image:", imageURL);
  } catch (error) {
    console.error("Error creating listing:", error);
  }
};

export const getPopularBlogs = () => {
  return getDocs(collection(db, "user"));
};

export const getRecentBlogs = () => {
  return getDocs(collection(db, "user"), orderBy("date", "asc"), limit(6));
};

export const getImageURL = (path) => {
  return getDownloadURL(ref(storage, path));
};

export const getUserById = async (id) => {
  const docRef = doc(db, "user", id);
  const result = await getDoc(docRef);
  return result;
};

export const deleteUserData = async (uid) => {
  try {
    await deleteDoc(doc(db, "user", uid));
  } catch (error) {
    console.error("Error deleting user data from Firestore:", error);
  }
};

export const deleteUser = async (uid) => {
  await deleteUserData(uid);
};

export const updateUserData = async (uid) => {
  const docRef = doc(db, "user", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  } else {
    console.log("No such document!");
  }
};

export const updateBlogPost = async (id, updatedData) => {
  try {
    const imageRef = ref(
      storage,
      `uploads/images/${Date.now()}-${updatedData?.image.name}`
    );
    const uploadResults = await uploadBytes(imageRef, updatedData?.image);
    const imageURL = await getDownloadURL(uploadResults.ref);
    const blogRef = doc(db, "user", id);
    await updateDoc(blogRef, {
      ...updatedData,
      image: uploadResults.ref.fullPath,
    });
    console.log(imageURL);
  } catch (error) {
    console.error(error);
  }
};

export default { auth, db, signup, login, logout };
