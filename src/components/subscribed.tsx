import { useAtom } from "jotai";
import { SubscribedAtom, type ISubscribed } from "../atom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Subscribe = styled.span`
    padding: 6px 12px;
    border-radius: 12px;
    background-color: ${props => props.theme.backgroundColor.style6};
    color: ${props => props.theme.color.style3};
    cursor: pointer;
`

export default function Subscribed({id}:{id:string|undefined}){
  const [subscribedNews,setSubscribedNews] = useAtom(SubscribedAtom);
  const [isSubscribed, setSubscribed] = useState(false);
  const changeSubscribed = () => {
    if(!id) return;
    setSubscribed(prev => !prev);
    const newSubscribed:ISubscribed = {
      id:id,
      is_subscribed: !isSubscribed
    }
    const findNews = subscribedNews.find(news => news.id === id);
    if(findNews){
      setSubscribedNews(subscribedNews.map(item => item.id === id ? newSubscribed : item));
    }else{
      setSubscribedNews([...subscribedNews,newSubscribed]);
    }
  }
  useEffect(() => {
    const findNews = subscribedNews.find(item => item.id === id);
    if(findNews) setSubscribed(findNews.is_subscribed);
    else setSubscribed(false);
  },[subscribedNews,isSubscribed,id]);
    return (
        <Subscribe className="subscribe" onClick={changeSubscribed}>
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </Subscribe>
    )
}