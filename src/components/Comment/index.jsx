import { ThumbsUp, Trash } from "phosphor-react";

export function Coment() {
  return (
    <>
      <div className="comment">
        <img
          src="https://avatars.githubusercontent.com/u/113571205?v=4"
          alt="avatar"
        />

        <div className="box">
            <div className="content">
                <header>
                    <div className="authorTime">
                        <strong>Ivny Metzker</strong>
                        <time title="24 de Outubro ás 08:23h" dateTime="2023-24-08 08:13:30">
                            Cerca de 1h atrás
                        </time>
                          </div> 
                          <button title="deletar comentario">
                              <Trash size={20} />
                          </button>      
                </header>
                <p>Muito bom Devon, parabéns!! 👌</p>
            </div>

                  <footer>
                      <button>
                          <ThumbsUp />
                          Aplaudir <span>20</span>
                      </button>
          </footer>
        </div>
      </div>
    </>
  );
}
