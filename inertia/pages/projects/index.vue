<script setup lang="ts">
import { Link, Head } from '@inertiajs/vue3'
const addProject = () => {
  console.log('Add project')
}
import Button from '~/components/ui/button/Button.vue'
import Input from '~/components/ui/input/Input.vue'
defineProps<{
  projects: Array<{ id: number; name: string }>
}>()

const project = ref({
  id: 1,
  name: 'Project 1',
})
</script>

<template>
  <Head title="Projects" />

  <div v-for="project in projects" :key="project.id">
    <Input v-model="project.name" />

    <Button @click="addProject">Add Project</Button>
    <div>{{ project.id }}</div>
    <Link :href="`/projects/${project.id}`">
      {{ project.name }}
    </Link>
  </div>
</template>
