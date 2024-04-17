<template>
  <div v-if="Boolean(hasViewed)">rendered on server</div>
  <div v-else>rendered on client</div>
</template>
<script setup lang="ts">
const hasViewed = useCookie("hasViewed", { maxAge: 3600 });
hasViewed.value = "true";
</script>
