import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchNewsList, type IData } from "../api";
import News from "../components/news";

const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: rgb(231, 233, 234);
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
export default function NewsMain(){
  const [dataset,setDataset] = useState<IData[]>([]);
  useEffect(() => {
    (async () => {
      const dataset = await fetchNewsList();
      setDataset(dataset.slice(0,10));
    })()
  },[])
    return (
      <>
        <MainMenu>
          <span className="selected">추천</span>
          <span>팔로우 중</span>
        </MainMenu>
        <Container>
            {dataset.map((data,i) => 
              <News key={i} {...data}/>
            )}
        </Container>
      </>
    )
}