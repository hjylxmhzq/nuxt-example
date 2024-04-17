<template>
  <section>
    <div>Memory Leak</div>
  </section>
</template>
<script setup lang="ts">
const state = useDetachedWatch();
state.value += 1;
</script>
