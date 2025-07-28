import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { fetchNews, type IData } from "../api";
import styled from "styled-components";
import { toDateFormat } from "../util/fomatter";
import { NewsHead } from "../components/styled.components";
const NewsBox = styled.div`
  width: 95%;
  min-height: 200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.borderColor.style2};
  color: ${props => props.theme.color.style2};
`;
const NewsTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
`;
const NewsImage = styled.div`
    margin: 4px auto;
    width: 90%;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;
const NewsContents = styled.div`
  line-height: 1.5;
`;
const NewsDate = styled.div`
  margin: 8px 4px;
  color: gray;
`;
export default function NewsDetail(){
    const {id} = useParams();
    const [data,setData] = useState<IData|undefined>();
    useEffect(() => {
        (async () => {
            const _news = await fetchNews(id!);
            setData(_news);
        })();
    },[id]);
    return (
        <NewsBox>
          <NewsHead $point={data?.fact_score ?? 0}>
            <div className="left">
              <div className="point"><span>{data?.fact_score}</span></div>
              <div className="press">
                <span>{data?.author_name}</span>
                <span>{data?.source_name}</span>
              </div>
            </div>
            <div className="right">
              <span className="subscribe">Subscribe</span>
            </div>
          </NewsHead>
          <NewsTitle>
            <span>{data?.title}</span>
          </NewsTitle>
          <NewsImage style={
            {backgroundImage:`url(${data?.image_url})`}
          }/>
          <NewsContents>
            <span>{data?.content}</span>
          </NewsContents>
          <NewsDate>
            <span>{data?.published_at ?? ''}</span>
          </NewsDate>
        </NewsBox>
    )
}