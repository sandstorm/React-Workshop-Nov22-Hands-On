import { memo } from "react"
import useCounter from "../hooks/useCounter"

type Props = {
    initialValue: number
    stepSize?: number
}

const CounterWithCustomHook = (props: Props) => {
    const {count, decrement, increment} = useCounter(props.initialValue, props.stepSize)

    return (
        <div>
            <p>count: {count}</p>
            <button disabled={count <= 0} onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default memo(CounterWithCustomHook)
