import styled from "styled-components";
import type { IData } from "../api";
import Evaluate from "./evaluate";
import { toDateFormat } from "../util/fomatter";
import { Link } from "react-router";

const NewsBox = styled.div`
  width: 95%;
  min-height: 200px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${props => props.theme.color.style2};
`;
const NewsHead = styled.div<{$point: number}>`
  display: grid;
  grid-template-columns: 2fr 1fr;
  div{
    display: flex;
    align-items: center;
    &.right{
      justify-content: flex-end;
    }
  }
  .press{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 12px;
    span:first-child{
      font-weight: bold;
    }
  }
  .point{
      margin-right: 12px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.$point > 50.0 ? props.theme.backgroundColor.style2 : props.theme.backgroundColor.style3};
      color: ${props => props.theme.color.style3};
  }
  .subscribe{
      padding: 6px 12px;
      border-radius: 12px;
      background-color: ${props => props.theme.backgroundColor.style4};
      color: ${props => props.theme.color.style3};
  }
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
export default function NewsDetail(data:IData){
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
              <span className="subscribe">Subscribe</span>
            </div>
          </NewsHead>
          <NewsTitle>
            <span>{data.title}</span>
          </NewsTitle>
          <NewsImage style={
            {backgroundImage:`url(${data.image_url})`}
          }/>
          <NewsContents>
            <span>{data.content}</span>
          </NewsContents>
          <NewsDate>
            <span>{toDateFormat(data.published_at)}</span>
          </NewsDate>
          <NewsSource className='source'>
            <Link to={`/detail/${data.id}`}>
            <span>원본보기</span>
            </Link>
          </NewsSource>
          <NewsLike>
            <span>해당 뉴스 기사에 신뢰하시나요?</span>
            <Evaluate />
          </NewsLike>
        </NewsBox>
    )
}