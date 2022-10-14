import { useEffect, useState } from 'react'

export default function useLocalStorage(key, passedValue) {

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        return passedValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
