import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyADdX-8SySpZWQ55Tldev0BF5TjRlfFEi8",
  authDomain: "chat-app-2fd59.firebaseapp.com",
  projectId: "chat-app-2fd59",
  storageBucket: "chat-app-2fd59.firebasestorage.app",
  messagingSenderId: "574020083224",
  appId: "1:574020083224:web:447ef27816e8e287bfed6d",
  measurementId: "G-5LC45KWEZM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Data JSON
const roomId = "12456";
const roomData = {
  name: "Product A",
  image_url: "https://picsum.photos/id/237/200/300"
};
const participants = {
  "admin@mail.com": { name: "Admin", role: 0 },
  "agent@mail.com": { name: "Agent A", role: 1 },
  "customer@mail.com": { name: "King Customer", role: 2 }
};
const messages = {
  "885512": { type: "text", message: "Selamat malam", sender: "customer@mail.com" },
  "885513": { type: "text", message: "Malam", sender: "agent@mail.com" },
  "885514": { type: "text", message: "Ada yang bisa saya bantu?", sender: "agent@mail.com" },
  "885515": { type: "text", message: "Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal", sender: "customer@mail.com" },
  "885516": { type: "text", message: "Baik, silahkan kirimkan lampiran bukti pembayarannya", sender: "agent@mail.com" }
};


const addDataToFirestore = async () => {
  try {
    
    await setDoc(doc(db, "rooms", roomId), roomData);

    
    for (const [email, participant] of Object.entries(participants)) {
      await setDoc(doc(db, "rooms", roomId, "participants", email), participant);
    }

    
    for (const [messageId, message] of Object.entries(messages)) {
      await setDoc(doc(db, "rooms", roomId, "messages", messageId), message);
    }

    console.log("Data berhasil ditambahkan ke Firestore");
  } catch (error) {
    console.error("Gagal menambahkan data:", error);
  }
};

addDataToFirestore();
