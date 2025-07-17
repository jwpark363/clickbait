import styled from "styled-components";
import type { IData } from "../api";
import Evaluate from "./evaluate";
import { toDateFormat } from "../util/fomatter";

const NewsBox = styled.div`
  width: 95%;
  min-height: 200px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: lightgray;
`;
const NewsTitle = styled.div`
    display: flex;
    align-items: center;
    .point{
        margin-right: 12px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: 2px solid tomato;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
const NewsContents = styled.div`
  line-height: 1.5;
`;
const NewsDate = styled.div`
  margin: 8px 4px;
  color: gray;
`;
const NewsLike = styled.div`
  margin: 4Px 8px;
  padding: 16px 0px;
  color: gray;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;
export default function News(data:IData){
    return(
        <NewsBox>
          <NewsTitle>
            <div className="point"><span>12.5%</span></div>
            <span>{data.TITLE}</span>
          </NewsTitle>
          <NewsContents>
            <span>{data.CONTENT}</span>
          </NewsContents>
          <NewsDate>
            <span>{toDateFormat(data.DATE)}</span>
          </NewsDate>
          <NewsLike>
            <Evaluate />
          </NewsLike>
        </NewsBox>
    )
}