import { useEffect, useMemo, useState } from "react"

const useResizeObserver = (elementToObserve: HTMLElement) => {
    const [viewPortSize, setViewPortSize] = useState(0)

    useEffect(() => {
        setViewPortSize(elementToObserve.clientWidth)

        const resizeObserver = new ResizeObserver((entries) => {
            setViewPortSize(entries[0].borderBoxSize[0].inlineSize)
        })
          
        resizeObserver.observe(elementToObserve);

        // remove observer after component unmount
        return () => resizeObserver.disconnect()
    }, [
        // only re-evaluate this effect hook, when "elementToObserve" or "setViewPortSize" changes 
        // (even if setViewPortSize is very likely not going to change)
        elementToObserve,
        setViewPortSize,
    ])

    const logFunnyJoke = useMemo(
        () => {
            // return the memoized value (in this case a function)
            return () => console.log('knock knock ...')
        }, 
        // dependency array of useMemo
        []
    )

    // this gives you an indication for hook re-evaluations (e.g. every time "viewPortSize" changes)
    console.log('hook re-evaluated!')

    return {
        size: viewPortSize,
        logFunnyJoke,
    }
}

export default useResizeObserver