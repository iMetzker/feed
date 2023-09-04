import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Container, Header, Author, Info, Content, ComentList } from "./style";
import { Coment } from "../Comment";
import { Avatar } from "../Avatar";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(["Post muito legal! 👌"]);
    const [newCommentText, setNewCommentText] = useState("");

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

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText("");
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("O campo de comentário é obrigatório!");
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <>
            <Container>
                <Header>
                    <Author>
                        <Avatar
                            src={author.avatarUrl}
                            alt=""
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
                            return <p key={line.content}>{line.content}</p>;
                        } else if (line.type === "link") {
                            return (
                                <p key={line.content}>
                                    <a href="">{line.content}</a>
                                </p>
                            );
                        }
                    })}
                </Content>

                <form onSubmit={handleCreateNewComment}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        name="comment"
                        value={newCommentText}
                        placeholder="Deixe um comentário"
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required
                    />
                    <button
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >
                        Publicar
                    </button>
                </form>

                <ComentList>
                    {comments.map((comment) => {
                        return (
                            <Coment
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment}
                            />
                        );
                    })}
                </ComentList>
            </Container>
        </>
    );
}
