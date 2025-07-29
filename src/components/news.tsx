import styled from "styled-components";
import type { IData } from "../api";
import Evaluate from "./evaluate";
import { Link } from "react-router";
import Subscribed from "./subscribed";
import { NewsHead } from "./styled.components";

const NewsBox = styled.div`
  width: 95%;
  min-height: 200px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${props => props.theme.color.style2};
`;
const NewsTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
`;
const NewsImage = styled.div`
  width: 80%;
  height: 200px;
  margin: 4px auto;
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
const NewsSource = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  span{
    padding: 4px 12px;
    border-radius: 8px;
    background-color: ${props => props.theme.backgroundColor.style5};
    color: ${props => props.theme.color.style3}
  }
`;
const NewsLike = styled.div`
  margin: 4Px 8px;
  padding: 16px 0px;
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  border-bottom: 1px solid ${props => props.theme.borderColor.style2};
`;
export default function News(data:IData){
  return(
      <NewsBox>
        <NewsHead $point={data.fact_score}>
          <div className="left">
            <div className="point"><span>{data.fact_score}</span></div>
            <div className="press">
              <span>{data.author_name}</span>
              <span>{data.source_name}</span>
            </div>
          </div>
          <div className="right">
            <Subscribed id={data.id} />
          </div>
        </NewsHead>
        <NewsTitle>
          <span>{data.title}</span>
        </NewsTitle>
        <NewsImage style={
          {backgroundImage:`url(${data.image_url})`}
        }/>
        <NewsContents>
          <span>{data.summary_content}</span>
        </NewsContents>
        <NewsDate>
          <span>{data.published_at}</span>
        </NewsDate>
        <NewsSource className='source'>
          <Link to={`/news/${data.id}`}>
          <span>원본보기</span>
          </Link>
        </NewsSource>
        <NewsLike>
          <span>해당 뉴스 기사에 신뢰하시나요?</span>
          <Evaluate id={data.id}/>
        </NewsLike>
      </NewsBox>
  )
}