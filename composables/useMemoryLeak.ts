const state = ref(0);

export function useDetachedWatch() {
  setTimeout(() => {
    watch(state, () => {
      console.log("Memory leak");
      console.log((state as any).dep.size);
    });
  }, 0);

  return state;
}
