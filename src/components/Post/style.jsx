import styled from "styled-components";

export const Container = styled.article`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 4rem;
  margin-bottom: 3.2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  time {
    font-size: 1.4rem;
    color: var(--gray-400);
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--gray-100);
    line-height: 1.6;
  }

  span {
    font-size: 1.4rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
`;
export const Content = styled.div`
  line-height: 1.6;
  color: var(--gray-300);
  margin-top: 2.4rem;

  p {
    margin-top: 1.6rem;
  }

  a {
    font-weight: bold;
    color: var(--green-500);
    text-decoration: none;
    padding-right: 0.5rem;

    &:hover {
      color: var(--green-300);
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 2.4rem;
  padding-top: 2.4rem;
  border-top: 1px solid var(--gray-600);

  strong {
    line-height: 1.6;
    color: var() (--gray-100);
  }

  textarea {
    background: var(--gray-900);
    border: none;
    resize: none;
    width: 100%;
    height: 9.6rem;
    padding: 1.6rem;
    border-radius: 8px;
    color: var(--gray-100);
    line-height: 1.4;
    margin-top: 1.6rem;
  }

  button {
    padding: 1.6rem 2.4rem;
    margin-top: 1.6rem;
    border-radius: 8px;
    border: 0;
    background: var(--green-500);
    color: var(--white);
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: var(--green-300);
      transition: 0.1s;
    }
  }
`;

export const ComentList = styled.div`
margin-top: 3.2rem;
`
