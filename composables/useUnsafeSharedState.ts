function initState() {
  return {
    count: 0,
  };
}

// unsecure global state
const state: Ref<ReturnType<typeof initState> | undefined> = ref();

export function useUnsafeSharedState() {
  state.value ??= initState();
  return state as Ref<ReturnType<typeof initState>>;
}
