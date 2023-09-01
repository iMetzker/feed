import { ThumbsUp, Trash } from "phosphor-react";
import { Comment, Box, Content, Header, AuthorandTime } from "./style";
import { Avatar } from "../Avatar";
import { useState } from "react";

export function Coment({ content, onDeleteComment }) {


    function handleDeleteComment() {
        onDeleteComment(content);
    }

    let [likeCount, setLikeCount] = useState(10);

    function handleLikeComment() {
        event.preventDefault();
        setLikeCount(likeCount + 1);

    }

    return (
        <>
            <Comment>
                <Avatar src="https://avatars.githubusercontent.com/u/113571205?v=4" />
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
                            <button
                                onClick={handleDeleteComment}
                                title="Deletar comentario"
                            >
                                <Trash size={24} />
                            </button>
                        </Header>
                        <p>{content}</p>
                    </Content>

                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </Box>
            </Comment>
        </>
    );
}
