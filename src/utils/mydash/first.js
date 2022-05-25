export function first(list) {
    if (Array.isArray(list)) {
        return list.length ? list[0] : undefined
    }
    return undefined;
}