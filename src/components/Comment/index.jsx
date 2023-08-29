import { ThumbsUp, Trash } from "phosphor-react";
import { Comment, Box, Content, Header, AuthorandTime } from "./style";

export function Coment() {
  return (
    <>
      <Comment>
        <img
          src="https://avatars.githubusercontent.com/u/113571205?v=4"
          alt="avatar"
        />

        <Box>
          <Content>
            <Header>
              <AuthorandTime>
                <strong>Ivny Metzker</strong>
                <time
                  title="24 de Outubro ás 08:23h"
                  dateTime="2023-24-08 08:13:30"
                >
                  Cerca de 1h atrás
                </time>
              </AuthorandTime>
              <button title="deletar comentario">
                <Trash size={20} />
              </button>
            </Header>
            <p>Muito bom Devon, parabéns!! 👌</p>
          </Content>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </Box>
      </Comment>
    </>
  );
}
