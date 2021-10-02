import styled from 'styled-components';

const colors = {
    white: '#fff',
    main: '#393c41'
}

export const Button = styled.button`
    background-color: ${({color}) => colors[color]};
    height: 40px;
    width: 256px;
    color: ${({color}) => color === 'main' ? colors.white : colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: .85;
    text-transform: uppercase;
    font-size: .8rem;
    margin: 10px;
    cursor: pointer;
    border: none;
    margin-bottom: 30px;
`