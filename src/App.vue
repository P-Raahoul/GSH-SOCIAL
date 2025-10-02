<script setup></script>

<template>
  <!--avatar-->
<div class="fixed bottom-4 left-4 z-50">
  <div class="avatar">
    <div class="w-24 rounded">
     <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
</div>


  <div class="flex flex-col items-center justify-center min-h-screen bg-base-200">
    <h1 class="text-4xl font-bold mb-6">Bienvenue sur mon site</h1>
    <button class="btn btn-primary" @click="goToLogin">Se connecter</button>
    <button class="btn btn-primary" @click="goToSign">S'inscrire</button>
  </div>

  
  <div id="app">
    
    <router-view />
  </div>

</template>
<script>
export default {
  name: 'App',
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style>
button {
  padding: 10px 20px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #4338ca;
}
</style>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter() // ← récupère l’objet router

function goToLogin() {
  router.push('/login') // ← navigation vers la route /login
}
</script>

