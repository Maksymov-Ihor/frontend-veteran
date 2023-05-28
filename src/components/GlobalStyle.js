import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, ;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courire New', monospace ;
    }

    ul {
        margin: 0;
        list-style: none;
        padding: 0;
    }
    h1,
    h2,
    h3,
    p {
        margin: 0;
    }
`;

export default GlobalStyle;