import { memo, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>count: {count}</p>
            <button disabled={count <= 0} onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default memo(Counter)
