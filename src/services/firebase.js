import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCy_nwrY_-mHHFVmR9dmen3TcdsDpmYqmE",
  authDomain: "chatgb-06-12-2021.firebaseapp.com",
  projectId: "chatgb-06-12-2021",
  storageBucket: "chatgb-06-12-2021.appspot.com",
  messagingSenderId: "110507898960",
  appId: "1:110507898960:web:85f61855411172464af955"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async(email, pass) => await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async(email, pass) => await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async() => await signOut(auth);

export const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMesListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);
export const getChatMesRefById = (chatId) => ref(db, `messages/${chatId}`);