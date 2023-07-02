import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvIRArXm-tbblAszR0iNFbfYb5ZnVeYhg",
  authDomain: "vite-project-d8b11.firebaseapp.com",
  projectId: "vite-project-d8b11",
  storageBucket: "vite-project-d8b11.appspot.com",
  messagingSenderId: "935395836447",
  appId: "1:935395836447:web:33ff5673bc1d5e57330b2a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");

