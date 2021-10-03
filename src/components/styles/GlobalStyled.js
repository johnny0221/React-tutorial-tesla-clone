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

    @keyframes animationDown {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }

        40% {
            transform: translateY(5px);
        }

        60% {
            transform: translateY(3px);
        }
    }
`