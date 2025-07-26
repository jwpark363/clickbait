import { BrowserRouter, Route, Routes } from "react-router"
import NewsMain from "./routers/news.main"
import styled from "styled-components"
import MainTitle from "./components/main.title";
import MainBottom from "./components/main.botton";

const MainContainer = styled.div`
  margin: 0px auto;
  min-width: 372px;
  max-width: 600px;
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
`;
const MainMenu = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${props => props.theme.borderColor.style1};
  span{
    width: 92px;
    text-align: center;
    padding: 8px;
    &.selected{
      border-bottom: 4px solid ${props => props.theme.borderColor.style4};
    }
  }
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
    <MainMenu>
      <span className="selected">추천</span>
      <span>팔로우 중</span>
    </MainMenu>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsMain />} />
      </Routes>
    </BrowserRouter>
    <BottomBox>
      <MainBottom />
    </BottomBox>
  </MainContainer>
  )
}

export default App
