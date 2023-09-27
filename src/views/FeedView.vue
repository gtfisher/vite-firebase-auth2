<script setup>
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { useRouter } from 'vue-router'
  import { onBeforeUnmount } from 'vue'
  import Counter from '../components/Counter.vue'
  import { store } from '../store.js'
  
  const router = useRouter()
  const auth = getAuth();

  const authListener = onAuthStateChanged(auth, (user) => {
      if (!user) { // not logged in
          alert('you must be logged in to view this. redirecting to the home page')
          router.push('/')
      }
  })
  onBeforeUnmount(() => {
      // clear up listener
      authListener()
  })
</script>
<template>
   <h1>Feed</h1>
  <h3>This page is RESTRICTED for users only</h3>
  <Counter />

  <img v-bind:src="store.user.photoURL" alt="Italian Trulli">
  <p>{{ store.user.email }}</p>


</template>
