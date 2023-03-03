export function hideModalHandler(setter) {
    return() => {
        setter(false)
    }
}

export function showModalHandler(setter) {
    return() => {
        setter(true)
    }
}