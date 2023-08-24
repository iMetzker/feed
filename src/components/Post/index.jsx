import { Container } from "./style";

export function Post(props) {
    console.log(props);
    return (
        <>
            <Container>
                <strong>{props.author}</strong>
                <p>{props.content}</p>
            </Container>
        </>
    )
}