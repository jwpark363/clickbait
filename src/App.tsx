import { Outlet } from "react-router"
import styled from "styled-components"
import MainTitle from "./components/main.title";
import MainBottom from "./components/main.botton";

const MainContainer = styled.div`
  margin: 78px auto;
  min-width: 372px;
  max-width: 600px;
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
`;
const TitleBox = styled.div`
  position: fixed;
  top: 0px;
  margin: 0px auto;
  min-width: 372px;
  max-width: 600px;
  width: 100vw;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor.style1};
  opacity: 0.8;
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
      <Outlet />
      <BottomBox>
        <MainBottom />
      </BottomBox>
    </MainContainer>
  )
}

export default App
