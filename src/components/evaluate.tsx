import { useAtom } from "jotai";
import styled from "styled-components"
import { BaseTrustAtom, type IBaseTrust } from "../atom";
import { useEffect, useState } from "react";

const SVG = styled.svg<{$trust:boolean|undefined}>`
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.color.style4};
    cursor: pointer;
    &.positive{
        fill: ${props => props.$trust === true ? props.theme.backgroundColor.style2 : props.theme.color.style5};
    }
    &.negative{
        fill: ${props => props.$trust === false ? props.theme.backgroundColor.style3 : props.theme.color.style5};
    }
`;
interface INewId{
    id:string
}
export default function Evaluate({id}:INewId){
    const [baseTrustAtom, setBaseTrustAtom] = useAtom(BaseTrustAtom);
    const [trust, setTrust] = useState<boolean|undefined>(undefined);
    useEffect(()=>{
        const baseTrust = baseTrustAtom.find(item => item.id === id);
        if(baseTrust) setTrust(baseTrust.trust === 'POSITIVE' ? true : baseTrust.trust === 'NEGATIVE' ? false : undefined);
    },[baseTrustAtom,id]);
    const changeBaseTrust = (trust:boolean) => {
        const findIdx = baseTrustAtom.findIndex(item => item.id === id);
        const newTrust : IBaseTrust = {
                id:id,
                trust:trust ? 'POSITIVE' : 'NEGATIVE'
        };
        if(findIdx >= 0){
            setBaseTrustAtom(baseTrustAtom.map((item,i) => findIdx === i ? newTrust : item ))
        }else{
            setBaseTrustAtom([...baseTrustAtom, newTrust])
        }
    }
    return(
        <>
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            $trust={trust} className="positive"
            onClick={() => changeBaseTrust(true)}>
        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"/>
        </SVG>
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            $trust={trust} className="negative"
            onClick={() => changeBaseTrust(false)}>
        <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"/>
        </SVG>
        </>
    )
}