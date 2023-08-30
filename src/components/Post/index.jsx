import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

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

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

    console.log(author);

  return (
    <>
      <Container>
        <Header>
          <Author>
            <Avatar
              src={author.avatarUrl}
              border="4px solid var(--gray-800)"
              outline="2px solid var(--green-500)"
            />
            <Info>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </Info>
          </Author>
          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </Header>

        <Content>
          {content.map((line) => {
            if (line.type === "paragraph") {
              return <p>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p><a href="">{line.content}</a></p>;
            }
          })}
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
