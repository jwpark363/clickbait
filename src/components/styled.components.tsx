import styled from "styled-components";

export const NewsHead = styled.div<{$point: number}>`
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
`;