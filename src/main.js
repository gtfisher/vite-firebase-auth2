import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import dotenv from 'dotenv'

import { initializeApp} from 'firebase/app';


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_APP_API_KEY,
    authDomain: import.meta.envVITE_FB_APP_AUTH_DOMAIN,
    projectId: import.meta.envVITE_FB_APP_PROJECT_ID,
    storageBucket: import.meta.envVITE_FB_APP_STORAGE_BUCKET,
    messagingSenderId:import.meta.envVITE_FB_APP_MSG_SEND_ID,
    appId: import.meta.envVITE_FB_APP_ID,
    measurementId: import.meta.envVITE_FB_APP_MEAS_ID
  };


  const firebase = initializeApp(firebaseConfig);


const app = createApp(App);

app.use(router);

app.mount("#app");

