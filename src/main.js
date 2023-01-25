import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

/* code from our Firebase console */
const firebaseConfig = {
  apiKey: "AIzaSyBzJWnBgF7A7KrwXQKFip33CdxK3Mok-eI",
  authDomain: "auth-vue-91844.firebaseapp.com",
  projectId: "auth-vue-91844",
  storageBucket: "auth-vue-91844.appspot.com",
  messagingSenderId: "233381265680",
  appId: "1:233381265680:web:530f2ebba64468747b6595",
  measurementId: "G-ZKS5WCEW1D"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')
