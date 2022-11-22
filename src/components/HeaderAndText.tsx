type Props = {
    title: string
}

const HeaderAndText = (props: Props) => (
    <>
        <h2>{props.title}</h2>
        <p>Text123</p>
    </>
)

export default HeaderAndText