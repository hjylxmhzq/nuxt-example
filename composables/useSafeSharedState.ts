function initState() {
  return {
    count: 0,
  };
}

export function useSharedState() {
  const state = useState("sharedState", () => initState());
  return state as Ref<ReturnType<typeof initState>>;
}
