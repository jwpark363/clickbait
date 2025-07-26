import styled from "styled-components"

const SVG = styled.svg`
    width: 48px;
    height: 48px;
    fill: ${props => props.theme.color.style5};
`;
const Title = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: ${props => props.theme.color.style1};
`;
const Upgrade = styled.div`
    padding: 2px 16px;
    border-radius: 12px;
    background-color: ${props => props.theme.backgroundColor.style2};
    color: ${props => props.theme.color.style3};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function MainTitle(){
    return(
        <>
            <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/>
            </SVG>
            <Title>
                Main Title
            </Title>
            <Upgrade>
                <span>업그레이드</span>
            </Upgrade>
        </>
    )
}