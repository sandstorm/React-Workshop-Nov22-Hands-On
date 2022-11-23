import { useMemo, useState } from "react"

const useCounter = (initialValue: number, stepSize: number = 1) => {
    const [count, setCount] = useState(initialValue)

    // only re-create increment and decrement functions if stepSize changes
    const decrement = useMemo(() => () => setCount(c => c - stepSize), [stepSize])
    const increment = useMemo(() => () => setCount(c => c + stepSize), [stepSize])

    return {
        count,
        decrement,
        increment,
    }
}

export default useCounter