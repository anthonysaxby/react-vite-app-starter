import { useState, useEffect } from 'react'

export function getStorageValue(key: string, defaultValue: unknown) {
    // getting stored value
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(key)
        const initial = saved !== null ? JSON.parse(saved) : defaultValue
        return initial
    }
}

export const useLocalStorage = (key: string, defaultValue: unknown) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    })

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
