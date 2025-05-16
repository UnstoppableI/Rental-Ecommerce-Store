import {initializeApp} from "firebase/app";
// Add SDKs for Firebase products that you want to use

// web app's firebase configuration
const firebaseConfig = {
    apikey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);