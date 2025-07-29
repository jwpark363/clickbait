import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import { Theme } from './theme.ts'
import { BrowserRouter, Route, Routes } from 'react-router'
import NewsMain from './routers/news.main.tsx'
import NewsDetail from './routers/news.detail.tsx'
import Home from './Home.tsx'

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<App />} >
            <Route index element={<NewsMain/>} />
            <Route path=":id" element={<NewsDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
