import styled from "styled-components"
import News from "./components/news";
import type { IData } from "./api";

const Container = styled.div`
  margin: 0px auto;
  min-width: 372px;
  max-width: 600px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: rgb(231, 233, 234);
  border-left: 1px solid rgb(83, 100, 113);
  border-right: 1px solid rgb(83, 100, 113);
`;
const datasets :IData[] = [
{
  BYLINE: '한현정 스타투데이 기자(kiki2022@mk.co.kr)',
  EXTENSION: 'jpg',
  CATEGORY_NAMES: '문화>방송_연예',
  DATE: '20250716',
  NEWS_ID: '02100101.20250716160509002',
  IMAGES: 'https://www.bigkinds.or.kr/resources/images/02100101/2025/07/16/02100101.20250716160509002.01',
  PROVIDER_LINK_PAGE: 'http://www.mk.co.kr/article/11369470',
  PROVIDER: '매일경제',
  TITLE: '아내 신장 재이식 앞두고…이수근, 30억 건물 내놨다',
  CONTENT: '연예계 소문난 사랑꾼 이수근이 아내의 신장 재이식 수술을 앞두고 꼬마빌딩을 30억원에 매각한다.<br/>이수근은 7일 토지거래 플랫폼 밸류맵에 서울 상암동 건물을 내놨다. 지상 3층 연면적 229.88m²(69평) 규모이며, 희망 매도가는 30억원이다.<br/>소유권자는 이수근의 아내 박지연 씨다. 박지연 씨는 건물이 증축 및 재등록된 2013년 이후 줄곧 단독 소유..'
},
{
  BYLINE: '이명수',
  EXTENSION: 'png',
  CATEGORY_NAMES: '문화>방송_연예<font color=Gray> | </font>문화>출판',
  DATE: '20250716',
  NEWS_ID: '02100701.20250716144642001',
  IMAGES: 'https://www.bigkinds.or.kr/resources/images/02100701/2025/07/16/02100701.20250716144642001.01',
  PROVIDER_LINK_PAGE: 'https://biz.heraldcorp.com/article/10533037',
  PROVIDER: '헤럴드경제',
  TITLE: '백발의 숀펜, 38세 연하 여친과 파리서 포착…마지막 열애?',
  CONTENT: '숀펜.[Splash News]<br/> <br/><br/>[헤럴드경제=이명수 기자] 할리우드 배우 숀 펜이 38세 연하 여자친구와 길거리에서 포착됐다. <br/> <br/><br/>미국 연예매체 스플래시닷컴은 지난 9일(현지시각) 프랑스 파리에서 숀 펜과 발레리아 니코브의 모습을 포착했다. <br/> <br/><br/>사진에서 두 사람은 파리의 한 레스토랑을 떠나는 모습이 포착됐다. 이들은 파리에서 외출하는 동안 주..'
}]
function App() {
  return (
    <Container>
      {datasets.map((data,i) => 
        <News key={i} {...data}/>

      )}
    </Container>
  )
}

export default App
