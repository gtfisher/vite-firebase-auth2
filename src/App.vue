<script setup>
import { ref, watchEffect } from 'vue' // used for conditional rendering
import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const isLoggedIn = ref(true)
  // runs after firebase is initialized
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
  if (user) {
        isLoggedIn.value = true // if we have a user
      } else {
        isLoggedIn.value = false // if we do not
      }
  })
  const signOut = () => {
    auth.signOut()
    router.push('/')
  }
</script>

<template>
  <nav>
    <router-link to="/"> Home </router-link> |
      <router-link to="/feed"> Feed </router-link> |
      <router-link to="/About"> About </router-link> |
      <span v-if="isLoggedIn">
        <button @click="signOut">Logout</button>
      </span>
      <span v-else>
        <router-link to="/register"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link>
      </span>
    </nav>
  <router-view />
</template>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
