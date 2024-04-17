<template>
  <h1>Nuxt Example</h1>
  <UnsafeState />
  <MemoryLeak />
  <HydrationMismatch />
  <HydrationMismatchFix />
  <APIForbiddenOnServer />
  <APIForbiddenOnServerFix />
</template>
<script setup lang="ts">
onMounted(async () => {
  const a = await $fetch("/api/hello-world", { method: "post" });
});
</script>
