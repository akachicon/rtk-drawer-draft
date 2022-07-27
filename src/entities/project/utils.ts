let id = 0;
export function genId(): string {
  const nextId = id++;
  return nextId.toString();
}
