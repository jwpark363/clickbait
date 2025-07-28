import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { fetchNews, type IData } from "../api";
import styled from "styled-components";
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
const NewsTrust = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size: 14px;
  padding: 4px 8px;
  span{
    padding: 8px 12px;
    border-radius: 8px;
    color: ${props => props.theme.color.style6};
    cursor: pointer;
    &.negative{
      background-color: ${props => props.theme.backgroundColor.style3};
    }
    &.positive{
      background-color: ${props => props.theme.backgroundColor.style2};
    }
  }
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
          <NewsTrust className='source'>
            <span className="negative">낚시성 제목</span>
            <span className="negative">내용과 불일치</span>
            <span className="negative">근거 부족</span>
            <span className="positive">팩트 충실함</span>
            <span className="positive">신뢰할 수 있음</span>
          </NewsTrust>
        </NewsBox>
    )
}