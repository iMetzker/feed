import {
  Container,
  Header,
  Author,
  Info,
  Content,
  Form,
  ComentList,
} from "./style";
import { Coment } from "../Comment";
import { Avatar } from "../Avatar";

export function Post() {
  return (
    <>
      <Container>
        <Header>
          <Author>
            <Avatar
              src="https://avatars.githubusercontent.com/u/113571205?v=4"
              border="4px solid var(--gray-800)"
              outline="2px solid var(--green-500)"
            />
            <Info>
              <strong>Ivny Metzker</strong>
              <span>Student Developer</span>
            </Info>
          </Author>
          <time title="24 de Outubro ás 08:23h" dateTime="2023-24-08 08:13:30">
            Publicado há 1h
          </time>
        </Header>

        <Content>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu </p>portifa. É um projeto
          que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
          <p>
            👉 <a href="">metzker.developer/doctorcare</a>
          </p>
          <p>
            <a href="">#novoprojeto</a>
            <a href="">#nlw</a>
            <a href="">#rocketseat</a>
          </p>
        </Content>

        <Form>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder="Deixe um comentário" />
          <button type="submit">Publicar</button>
        </Form>

        <ComentList>
          <Coment />
          <Coment />
          <Coment />
        </ComentList>
      </Container>
    </>
  );
}
