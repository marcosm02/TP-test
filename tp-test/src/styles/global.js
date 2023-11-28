import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body{
        width: 100%;
        height: 100%;
        background-color: var(--color-grey-3);
    }

    #root{
        width: 100%;
        height: 100%
    }

    .App{
        width: 100%;
        height: 100%
    }

    button{
        cursor: pointer;
    }

    input{
        border: none;
    }


    img{
        width: 100%;
    }

    :root {
        --color-primary: #AB242E;
        --color-primary-hover: #783136;

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;
    }
`;
