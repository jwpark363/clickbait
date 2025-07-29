import { Link } from "react-router";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: 0px auto;
  min-width: 372px;
  max-width: 600px;
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  div{
    width: 80%;
    height: 520px;
    margin: 24px auto;
    border-radius: 64px;
    background-image: url('./src/assets/main_image02.png');
    background-size: cover;
    background-position: center center;
  }
  span{
    padding: 18px 24px;
    font-size: 24px;
    font-weight: bole;
    background-color: ${props => props.theme.backgroundColor.style6};
    color: ${props => props.theme.color.style6};
    border-radius: 24px;
  }
`;

export default function Home(){
    return(
        <MainContainer>
            <div></div>
            <Link to={'/news'}>
                <span>뉴스 보기</span>
            </Link>
        </MainContainer>
    )
}