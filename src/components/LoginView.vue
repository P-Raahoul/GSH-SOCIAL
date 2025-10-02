<template>
  <div class="card w-96 bg-base-100 shadow-sm">
    <div class="card-body">
      <span class="badge badge-xs badge-info">Connexion</span>
      <h2 class="text-3xl font-bold text-center mb-4">Bienvenue</h2>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Adresse email</span>
          </div>
          <input
            type="email"
            v-model="email"
            placeholder="exemple@mail.com"
            class="input input-bordered w-full"
            required
          />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Mot de passe</span>
          </div>
          <input
            type="password"
            v-model="password"
            placeholder="••••••••"
            class="input input-bordered w-full"
            required
          />
        </label>

        <div class="form-control mt-2">
          <button class="btn btn-primary btn-block">Se connecter</button>
        </div>
      </form>

      <div class="mt-4 text-center text-sm opacity-70">
        <span>Pas encore inscrit ?</span>
        <a href="/register" class="link link-hover text-primary">Créer un compte</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
  // Logique de connexion ici
  console.log('Email:', email.value)
  console.log('Mot de passe:', password.value)
}
</script>

