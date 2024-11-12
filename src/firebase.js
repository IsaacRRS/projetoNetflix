import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD53YtO4-L4Z5f-69cG0bCd1wt-Uuypnx0",
  authDomain: "projeto-netflix-99620.firebaseapp.com",
  projectId: "projeto-netflix-99620",
  storageBucket: "projeto-netflix-99620.firebasestorage.app",
  messagingSenderId: "82055368573",
  appId: "1:82055368573:web:ae34593f51de48ad740614",
  measurementId: "G-0JKRL60S2P"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getFirestore(app);

const registro = async (nome, email, password) => {
    try {
        const receb = await createUserWithEmailAndPassword(auth, email, password);
    
        const usuario = receb.usuario;

        await addDoc(collection(database, "usuario"), {
            uid: usuario.uid,
            nome,
            authProvider: "local",
            email,

        })

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));
    }
}

const login = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));
    }
}

const sair = () => {
    signOut(auth);
}

export {auth, database, registro, login, sair};