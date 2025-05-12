
//firebase.init.js


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBhYDHYF-3gon3edW3sz6aYya7RgLXVLJs",
//   authDomain: "my-subscription-box-39991.firebaseapp.com",
//   projectId: "my-subscription-box-39991",
//   storageBucket: "my-subscription-box-39991.firebasestorage.app",
//   messagingSenderId: "278265872488",
//   appId: "1:278265872488:web:63a4871e258dafceddfbdd"
// };


// const app = initializeApp(firebaseConfig);

// export const auth=getAuth(app)









// firebase.config.js or firebase.init.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
