export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function filterWithImage<T extends { image?: unknown }>(
  array: T[]
): T[] {
  return array.filter((item) =>
    typeof item.image === "string"
      ? item.image.trim() !== ""
      : Boolean(item.image)
  );
}
