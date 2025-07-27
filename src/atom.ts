import { atom } from "jotai";


interface ISubscribed{
    id:string,
    is_subscribed:boolean
}
export const SubscribedAtom = atom<ISubscribed[]>([]);
export enum BaseTrust{
    POSITIVE='POSITIVE',
    NEGATIVE='NEGATIVE',
    UNKNOWN='UNKNOWN'
}
export interface IBaseTrust{
    id:string,
    trust?:BaseTrust
}
export const BaseTrustAtom = atom<IBaseTrust[]>([]);

export enum DetailTrust{
    FISHING='FISHING',
    CONTENT_MISMATCH='CONTENT_MISMATCH',
    NO_EVIDENCE='NO_EVIDENCE',
    FACT='FACT',
    TRUSTED='TRUSTED'
}
export interface IDetailedTrust{
    id:string,
    trust?:DetailTrust
}
export const DetailedTrustAtom = atom<IDetailedTrust[]>([]);