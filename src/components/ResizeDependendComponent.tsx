import { memo } from "react"
import useResizeObserver from "../hooks/useResizeObserver"

const ResizeDependendComponent = () => {
    const { size, logFunnyJoke } = useResizeObserver(document.body)

    return (
        <div>
            <p>{`viewPortSize is ${size}`}</p>
            <button onClick={() => logFunnyJoke()}>Tell joke in console</button>
        </div>
    )
}

export default memo(ResizeDependendComponent)