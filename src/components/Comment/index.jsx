import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { ThumbsUp, Trash } from "phosphor-react";
import { Comment, Box, Content, Header, AuthorandTime } from "./style";
import { Avatar } from "../Avatar";
import { useState, useEffect } from "react";

export function Coment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    let [likeCount, setLikeCount] = useState(10);
    const [publishedDate] = useState(new Date());
    const [timeRelativeToNow, setTimeRelativeToNow] = useState(
        formatDistanceToNow(new Date(), {
            locale: ptBR,
            addSuffix: true,
        })
    );

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    useEffect(() => {
        // Atualiza o tempo relativo a cada 60 segundos
        const interval = setInterval(() => {
            setTimeRelativeToNow(
                formatDistanceToNow(publishedDate, {
                    locale: ptBR,
                    addSuffix: true,
                })
            );
        }, 60000);

        return () => clearInterval(interval);
    }, [publishedDate]);

    const publishedDateFormatted = format(
        publishedDate,
        "d 'de' LLLL 'ás' HH:mm'h'",
        {
            locale: ptBR,
        }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, {
        locale: ptBR,
        addSuffix: true,
    });

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
                                    title={publishedDateFormatted}
                                    dateTime={new Date().toISOString()}
                                >
                                    {publishedDateRelativeToNow}
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
