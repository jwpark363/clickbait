import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { fetchNews, type IData } from "../api";
import styled from "styled-components";
import { NewsHead } from "../components/styled.components";
import { useAtom } from "jotai";
import { DetailedTrustAtom, DetailTrust, type IDetailedTrust } from "../atom";
import Subscribed from "../components/subscribed";
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
  justify-content:center;
  align-items:center;
  gap: 20px;
  font-size: 14px;
  padding: 4px 8px;
`;
const TrustSpan = styled.span<{$trust:boolean|undefined}>`
    padding: 8px 12px;
    border-radius: 8px;
    color: ${props => props.theme.color.style6};
    cursor: pointer;
    &.negative{
      background-color: ${props => props.$trust ? props.theme.backgroundColor.style3 : props.theme.backgroundColor.style5};
    }
    &.positive{
      background-color: ${props => props.$trust ? props.theme.backgroundColor.style2 : props.theme.backgroundColor.style5};
    }
`;
export default function NewsDetail(){
    const {id} = useParams();
    const [data,setData] = useState<IData|undefined>();
    const [detailTrustAtom, setTrustAtom] = useAtom(DetailedTrustAtom)
    // 01:FISHING, 02:CONTENT_MISMATCH, 03:NO_EVIDENCE, 04:FACT, 05:TRUSTED
    // const TrustList = Object.values(DetailTrust);
    // console.log(TrustList);
    const [trust01, setTrust01] = useState<boolean|undefined>(undefined);
    const [trust02, setTrust02] = useState<boolean|undefined>(undefined);
    const [trust03, setTrust03] = useState<boolean|undefined>(undefined);
    const [trust04, setTrust04] = useState<boolean|undefined>(undefined);
    const [trust05, setTrust05] = useState<boolean|undefined>(undefined);

    const changeTrust = (trust_number:number) => {
      if(!id) return;
      const findTrust = detailTrustAtom.find(item => item.id === id);
      let trustList: DetailTrust[] = findTrust?.trust ?? [];
      switch(trust_number){
        case 1:
          setTrust01(prev => !prev);
          if(!trust01) trustList.push('FISHING');
          else trustList = trustList.filter(item => item !== 'FISHING')
          break;
        case 2:
          setTrust02(prev => !prev);
          if(!trust02) trustList.push('CONTENT_MISMATCH');
          else trustList = trustList.filter(item => item !== 'CONTENT_MISMATCH')
          break;
        case 3:
          setTrust03(prev => !prev);
          if(!trust03) trustList.push('NO_EVIDENCE');
          else trustList = trustList.filter(item => item !== 'NO_EVIDENCE')
          break;
        case 4:
          setTrust04(prev => !prev);
          if(!trust04) trustList.push('FACT');
          else trustList = trustList.filter(item => item !== 'FACT')
          break;
        case 5:
          setTrust05(prev => !prev);
          if(!trust05) trustList.push('TRUSTED');
          else trustList = trustList.filter(item => item !== 'TRUSTED')
          break;
      }
      const newTrust : IDetailedTrust = {
                      id:id,
                      trust:trustList
      };
      if(findTrust){
        setTrustAtom(detailTrustAtom.map(item => item.id === findTrust.id ? newTrust : item));
      }else{
        setTrustAtom([...detailTrustAtom,newTrust]);
      }
    }
    useEffect(() => {
      // fetch news by id
        (async () => {
            const _news = await fetchNews(id!);
            setData(_news);
        })();
    },[id]);
    useEffect(() => {
      // read detail trus atom and set trust value
      const findTrust = detailTrustAtom.find(item => item.id === id);
      if(findTrust){
        const trustList = findTrust.trust ?? [];
        setTrust01(trustList.includes('FISHING'));
        setTrust02(trustList.includes('CONTENT_MISMATCH'));
        setTrust03(trustList.includes('NO_EVIDENCE'));
        setTrust04(trustList.includes('FACT'));
        setTrust05(trustList.includes('TRUSTED'));
      }
    },[id,detailTrustAtom])
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
              <Subscribed id={id}/>
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
            <TrustSpan $trust={trust04} className="positive" onClick={() => changeTrust(4)}>팩트 충실함</TrustSpan>
            <TrustSpan $trust={trust05} className="positive" onClick={() => changeTrust(5)}>신뢰할 수 있음</TrustSpan>
          </NewsTrust>
          <NewsTrust className='source'>
            <TrustSpan $trust={trust01} className="negative" onClick={() => changeTrust(1)}>낚시성 제목</TrustSpan>
            <TrustSpan $trust={trust02} className="negative" onClick={() => changeTrust(2)}>내용과 불일치</TrustSpan>
            <TrustSpan $trust={trust03} className="negative" onClick={() => changeTrust(3)}>근거 부족</TrustSpan>
          </NewsTrust>
        </NewsBox>
    )
}