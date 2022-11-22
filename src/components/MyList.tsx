type Props = {
    list: Array<string>
}

const MyList = (props: Props) => (
    <ul>
        {props.list.map(item => <li key={item}>{item}</li>)}
    </ul>
)

export default MyList