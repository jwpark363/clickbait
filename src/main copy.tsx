import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { Theme } from './theme.ts'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    background-color: white;
  };
  div{
    box-sizing: border-box;
  };
  a{
    text-decoration: none;
  }
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
