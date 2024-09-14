<script setup lang="ts">
import { Link, Head, useForm, useRemember } from '@inertiajs/vue3'
import Button from '~/components/ui/button/Button.vue'
import Input from '~/components/ui/input/Input.vue'
import { ref } from 'vue'

defineProps<{
  projects: Array<{ id: number; name: string }>
}>()

const newProject = ref({
  name: '',
})

/** @see https://inertiajs.com/forms */
const form = useForm(newProject.value)
const handleSubmit = () => form.post('/projects/', { onSuccess: () => form.reset() })
</script>

<template>
  <Head title="Projects" />

  <div>
    <form @submit.prevent="handleSubmit">
      <Input v-model="newProject.name" />
      <div v-if="form.errors.name">{{ form.errors.name }}</div>

      <Button type="submit" :disabled="form.processing">Add Project</Button>
    </form>
  </div>

  <div v-for="project in projects" :key="project.id">
    <div>{{ project.id }}</div>
    <Link :href="`/projects/${project.id}`">
      {{ project.name }}
    </Link>
  </div>
</template>
