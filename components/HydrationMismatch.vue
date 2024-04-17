<template>
  <div v-if="hasViewed">rendered on client</div>
  <div v-else>rendered on server</div>
</template>
<script setup lang="ts">
const hasViewed = ref(false);

if (import.meta.client) {
  localStorage.setItem("hasViewed", "true");
  hasViewed.value = Boolean(localStorage.getItem("hasViewed") ?? "false");
}
</script>
