<script setup lang="ts">
import { Link, Head } from '@inertiajs/vue3'

defineProps<{ version: number }>()
</script>

<template>
  <Head title="Homepage" />

  <div class="container">
    <div class="title">AdonisJS {{ version }} x Inertia x Vue.js</div>
    <div>
      <Link href="/projects">Projects</Link>
    </div>
  </div>
</template>
