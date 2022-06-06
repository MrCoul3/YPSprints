export function last(list) {
  if (Array.isArray(list)) {
    return list.length ? list[list.length - 1] : undefined;
  }
  return undefined;
}
