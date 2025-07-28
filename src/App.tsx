import { BrowserRouter, Route, Routes } from "react-router"
import NewsMain from "./routers/news.main"
import styled from "styled-components"
import MainTitle from "./components/main.title";
import MainBottom from "./components/main.botton";
import NewsDetail from "./routers/news.detail";

const MainContainer = styled.div`
  margin: 0px auto;
  min-width: 372px;
  max-width: 600px;
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
`;
const TitleBox = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
`;
const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid ${props => props.theme.borderColor.style1};
`;


function App() {
  return (
    <MainContainer>
      <TitleBox>
        <MainTitle />
      </TitleBox>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsMain />} />
          <Route path="/detail/:id" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
      <BottomBox>
        <MainBottom />
      </BottomBox>
    </MainContainer>
  )
}

export default App
