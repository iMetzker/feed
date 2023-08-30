import styled from "styled-components";

export const Comment = styled.div`
  margin-top: 2.4rem;
  display: flex;
  gap: 1.6rem;

  img {
    box-sizing: initial;
    border-radius: 8px;
    width: 48px;
    height: 48px;
  }
`;

export const Box = styled.div`
  flex: 1;

  button {
    cursor: pointer;
    margin-top: 2rem;
    background: transparent;
    border: none;
    color: var(--gray-400);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        color: var(--green-300);
    }
  }
`;

export const Content = styled.div`
  background: var(--gray-700);
  border-radius: 8px;
  padding: 1.6rem;

  button {
    background: transparent;
    border: none;
    margin-top: 0;
    color: var(--gray-400);
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;

    &:hover {
      color: var(--red-500);
    }
  }

  p {
    margin-top: 3rem;
    color: var(--gray-300);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AuthorandTime = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.4rem;
    line-height: 1.6;
  }

  time {
    font-size: 1.4rem;
    line-height: 1.6;
    color: var(--gray-400);
  }
`;
