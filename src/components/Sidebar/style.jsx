import styled from 'styled-components'

export const Aside = styled.aside`
background-color: var(--gray-800);
border-radius: .8rem;
overflow: hidden;

img {
width: 100%;
height: 72px;
object-fit: cover;
}
`

export const Profile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: -3.5rem;
`

export const Button = styled.div`
border-top: 1px solid var(--gray-600);
margin-top: 2.4rem;
padding: 2.4rem 3.2rem 3.2rem;

a {
    background-color: transparent;
    color: var(--green-500);
    border: 1px solid var(--green-500);
    border-radius: 8px;
    height: 50px;
    padding: 0 2.4rem;
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    &:hover {
        background-color: var(--green-500);
        color: var(--white);
        transition: ease-in-out 200ms;
    }
}
`
export const Name = styled.strong`
margin-top: 1rem;
color: var(--gray-100);
line-height: 1.6;
`

export const Office = styled.span`
font-size: 1.4rem;
color: var(--gray-400);
line-height: 1.6;
`
