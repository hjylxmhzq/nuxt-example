<template>
  <section>
    <div>Shared State</div>
    <div>Safe: {{ safeState.count }}</div>
    <div>Unsafe: {{ unsafeState.count }}</div>
  </section>
</template>
<script setup lang="ts">
const unsafeState = useUnsafeSharedState();
const safeState = useSharedState();

// unsafeState.value.count += 1;
if (import.meta.server) {
  safeState.value.count += 1;
  unsafeState.value.count += 1;
}
</script>
