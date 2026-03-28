export function useGuide() {
  const enabled = useState("guide", () => false);

  function toggle() {
    enabled.value = !enabled.value;
  }

  return { enabled, toggle };
}
