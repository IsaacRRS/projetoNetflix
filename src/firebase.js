import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "----------",
  authDomain: "----------",
  projectId: "----------",
  storageBucket: "----------.firebasestorage.app",
  messagingSenderId: "----------",
  appId: "----------",
  measurementId: "----------"
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