import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=PT+Sans&display=swap');

    body {
        margin: 0;
        font-family: 'PT Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        min-height: 100vh;
    }

    input { 
        font-family: 'PT Sans', sans-serif;
    }
`