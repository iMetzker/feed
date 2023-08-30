import styled from 'styled-components';

export const Container = styled.div`
img {
box-sizing: initial;
border-radius: 8px;
width: 48px;
height: 48px;
border: ${(props) => props.hasborder};
outline: ${(props) => props.hasoutline};
}
`