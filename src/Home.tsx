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
  gap: 12px;
  div.main{
    width: 80%;
    height: 520px;
    margin: 120px auto;
    border-radius: 64px;
    background-image: url('https://raw.githubusercontent.com/jwpark363/clickbait/refs/heads/main/src/assets/main_image02.png');
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
  div.logo{
    width: 200px;
    height: 80px;
    margin: 0px auto;
    border-radius: 20px;
    background-image: url('/src/assets/cone.png');
    background-size: cover;
    background-position: center center;
  }
`;

export default function Home(){
    return(
        <MainContainer>
            <div className="main"></div>
            <Link to={'/news'}>
                <div className="logo"></div>
            </Link>
        </MainContainer>
    )
}