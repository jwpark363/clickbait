import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchNews, type IData } from "../api";
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
export default function NewsMain(){
  const [dataset,setDataset] = useState<IData[]>([]);
  useEffect(() => {
    setDataset(fetchNews());
  },[])
    return (
        <Container>
            {dataset.map((data,i) => 
            <News key={i} {...data}/>

            )}
        </Container>
    )
}