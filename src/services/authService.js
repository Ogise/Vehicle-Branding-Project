// src/services/authService.js
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase"; // Ensure this is correct with 'Firebase.js'

const auth = getAuth(app);

export const logIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
