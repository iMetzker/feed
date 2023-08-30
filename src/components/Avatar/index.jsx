import { Container } from "./style";

export function Avatar({src, border, outline}) {
  return (
    <Container hasborder={border} hasoutline={outline}>
      <img
        src={src}
        alt="imagem de capa"
      />
    </Container>
  );
}
