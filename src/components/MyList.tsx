import { memo } from "react"

type Props = {
    list: Array<string>
}

const MyList = (props: Props) => (
    <ul>
        {props.list.map(item => <li key={item}>{item}</li>)}
    </ul>
)

// memoize result of component so we don't have to re-evaluate it if the props didn't change
// IF state or effects (hooks) change/re-run the component still re-renders
export default memo(MyList)