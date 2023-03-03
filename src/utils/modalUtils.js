export function hideModalHandler(setter) {
    return() => {
        setter(false)
    }
}