<template>111</template>
<script setup lang="ts">
onMounted(async () => {
  const a = await $fetch("/api/test", { method: "post" });
});
</script>
