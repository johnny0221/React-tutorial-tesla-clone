import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

    * {
        font-family: "Rubik", sans-serif;
        color: #393c41;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
    }
`