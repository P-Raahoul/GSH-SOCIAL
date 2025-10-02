import HomeView from '../views/Home.vue'

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-base-200">
    <h1 class="text-4xl font-bold mb-6">Bienvenue sur mon site</h1>
    <button class="btn btn-primary" @click="goToSign">S'inscrire</button>
    <button class="btn btn-primary" @click="goToLogin">Se connecter</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToLogin() {
  router.push('/login')
}
</script>