<script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { useRouter } from 'vue-router' // import router

  import { fbauth } from '../main.js'
  import { store } from '../store.js'

  const email = ref('')
  const password = ref('')
  const errMsg = ref() // ERROR MESSAGE
  const router = useRouter() // get a reference to our vue router
  //const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  console.log("setup")

  const signIn = () => {
    signInWithEmailAndPassword(fbauth, email.value, password.value)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('Successfully logged in!');
    router.push('/feed') // redirect to the feed
  })
  .catch((error) => {
    console.log("error:", error)
    switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
          case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Incorrect password'
              break
          default:
              errMsg.value = 'Email or password was incorrect'
              break
        }
  });

  }

  const signInGoogle = () => {
    console.log("signInGoogle");

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });


  signInWithPopup(fbauth, provider)
  .then((result) => {

    console.log("got result");
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    store.user = user
    // IdP data available using getAdditionalUserInfo(result)

    router.push('/feed')
    // ...
  }).catch((error) => {

    console.log("error:",error.code)
    console.log("error:",error.message)
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  
 
  


</script>
  


<template>
    <h1>Login to Your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="signIn">Submit</button></p>

  <p><button @click="signInGoogle">Sign in with Google</button></p>

</template>