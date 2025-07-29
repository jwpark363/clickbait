import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchNewsList, type IData } from "../api";
import News from "../components/news";
import { useAtomValue } from "jotai";
import { SubscribedAtom } from "../atom";

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
    cursor: pointer;
  }
`;
export default function NewsMain(){
  const subscribedNews = useAtomValue(SubscribedAtom);
  const [isSubscribed, setSubscribed] = useState(false);
  const [dataset,setDataset] = useState<IData[]>([]);
  const changeSubscribed = (subscribed:boolean) => {
    setSubscribed(subscribed);
  }
  useEffect(() => {
    (async () => {
      const dataset = await fetchNewsList();
      const subscribedIds = subscribedNews.filter(item => item.is_subscribed).map(item => item.id);
      if(isSubscribed){
        setDataset(dataset.slice(0,10).filter(item => subscribedIds.includes(item.id)));
      }
      else{
        setDataset(dataset.slice(0,10).filter(item => !subscribedIds.includes(item.id)));
      }
    })()
  },[subscribedNews,isSubscribed])
  // console.log(dataset);
    return (
      <>
        <MainMenu>
          <span className={isSubscribed ? "unselected": "selected"} onClick={() => changeSubscribed(false)}>추천</span>
          <span className={isSubscribed ? "selected": "unselected"} onClick={() => changeSubscribed(true)}>팔로우 중</span>
        </MainMenu>
        <Container>
            {dataset.map((data,i) => 
              <News key={i} {...data}/>
            )}
        </Container>
      </>
    )
}