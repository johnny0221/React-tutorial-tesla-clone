import styled from 'styled-components';

export const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({backgroundImg}) => `url('/images/${backgroundImg}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`