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
import { toast } from "react-toastify";

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

const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
    { method: "POST", body: formData }
  );
  if (!response.ok) throw new Error("Cloudinary upload failed");
  const data = await response.json();
  return data.secure_url;
};

// User signup function
export const signup = async (name, email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};

// User login function
export const login = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

// User logout function
export const logout = async () => {
  try {
    toast.success("Logout successful!");
    await signOut(auth);
  } catch (error) {
    toast.error("Error during logout: " + error.message);
    console.log("Error during sign out...");
  }
};

// Function to handle creating a listing
export const handleCreateListing = async (
  userId,
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
    const imageURL = await uploadToCloudinary(image);
    await addDoc(collection(db, "user"), {
      userId,
      title,
      author,
      description,
      category,
      tags,
      imageURL,
      content,
      date,
    });
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

export const getImageURL = (url) => Promise.resolve(url);

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
    const blogRef = doc(db, "user", id);

    // Check if image is a new file upload or existing URL/path
    if (
      updatedData?.image &&
      typeof updatedData.image === "object" &&
      updatedData.image.name
    ) {
      const imageURL = await uploadToCloudinary(updatedData.image);
      await updateDoc(blogRef, {
        ...updatedData,
        image: imageURL,
      });
    } else {
      // Existing image path/URL or no image change, update without uploading
      await updateDoc(blogRef, updatedData);
    }
  } catch (error) {
    console.error("Error updating blog post:", error);
  }
};

export default { auth, db, signup, login, logout };
