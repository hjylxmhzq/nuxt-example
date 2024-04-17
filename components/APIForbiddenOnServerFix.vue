<template>
  <div>Data from auth api: {{ data.data }}</div>
</template>
<script setup lang="ts">
if (import.meta.client) {
  // we assume that the user is authenticated before visiting this page
  document.cookie = "auth=true; path=/; max-age=3600";
}

const headers = useRequestHeaders();
const data = await useFetch("/api/need-auth", {
  method: "get",
  headers,
  ignoreResponseError: true,
});
</script>
