export function handleChange(setter) {
    return (e) => {
        setter(e.target.value)
    }
}