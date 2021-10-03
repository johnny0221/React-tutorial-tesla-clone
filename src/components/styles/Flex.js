import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: center;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`