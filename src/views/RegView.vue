<script setup>
 import { ref } from 'vue'
 import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';
 import { useRouter } from 'vue-router' // import router



const email = ref(null)
const password = ref(null)

const router = useRouter() // get a reference to our vue router

const register = () => {
    console.log("register");
    console.log("user:",email)
    const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('Successfully registered!');
    router.push('/feed')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    alert(errorMessage);
  });
};
  


</script>


<template>
    <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>