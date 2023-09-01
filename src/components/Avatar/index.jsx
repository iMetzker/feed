import { Container } from "./style";

export function Avatar({ border, outline, ...props}) {
  return (
    <Container hasborder={border} hasoutline={outline}>
        <img
            {...props}
        />
    </Container>
  );
}
