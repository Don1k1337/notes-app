import React from "react";

export function handleChange<T> (setter: (value: T) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            ) => {
            setter(e.target.value as unknown as T)
    }
}