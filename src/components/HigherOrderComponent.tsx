import { ReactNode } from "react"

// hands on nr 2

type Props = {
    children: ReactNode
    otherComponent?: ReactNode
}

const HigherOrderComponent = (props: Props) => (
    <div>
        {props.children}
        {props.otherComponent}
    </div>
)

export default HigherOrderComponent