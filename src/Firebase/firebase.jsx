import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyADdX-8SySpZWQ55Tldev0BF5TjRlfFEi8",
  authDomain: "chat-app-2fd59.firebaseapp.com",
  databaseURL: "https://chat-app-2fd59-default-rtdb.asia-southeast1.firebasedatabase.app", 
  projectId: "chat-app-2fd59",
  storageBucket: "chat-app-2fd59.firebasestorage.app",
  messagingSenderId: "574020083224",
  appId: "1:574020083224:web:447ef27816e8e287bfed6d",
  measurementId: "G-5LC45KWEZM"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  


export { database, ref, onValue, push, set }; 
