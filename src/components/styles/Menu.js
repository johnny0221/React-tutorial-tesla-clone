import styled from 'styled-components';

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media(max-width: 768px) {
        display: none;
    }
`