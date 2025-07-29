import { atomWithStorage } from "jotai/utils";


export interface ISubscribed{
    id:string,
    is_subscribed:boolean
}
export const SubscribedAtom = atomWithStorage<ISubscribed[]>("subscribed_news",[]);
// export enum BaseTrust{
//     POSITIVE='POSITIVE',
//     NEGATIVE='NEGATIVE',
//     UNKNOWN='UNKNOWN'
// }
export type BaseTrust = 'POSITIVE' | 'NEGATIVE' | 'UNKNOWN'
export const BaseTrust = {
    POSITIVE: 'POSITIVE',
    NEGATIVE: 'NEGATIVE',
    UNKNOWN : 'UNKNOWN'
} as const;
export interface IBaseTrust{
    id:string,
    trust?:BaseTrust
}
export const BaseTrustAtom = atomWithStorage<IBaseTrust[]>("base_trust",[]);
// export enum DetailTrust{
//     FISHING='FISHING',
//     CONTENT_MISMATCH='CONTENT_MISMATCH',
//     NO_EVIDENCE='NO_EVIDENCE',
//     FACT='FACT',
//     TRUSTED='TRUSTED'
// }
export type DetailTrust = 'FISHING' | 'CONTENT_MISMATCH' | 'NO_EVIDENCE' | 'FACT' | 'TRUSTED'
export const DetailTrust = {
    FISHING:'FISHING',
    CONTENT_MISMATCH:'CONTENT_MISMATCH',
    NO_EVIDENCE:'NO_EVIDENCE',
    FACT:'FACT',
    TRUSTED:'TRUSTED'
}
export interface IDetailedTrust{
    id:string,
    trust?:DetailTrust[]
}
export const DetailedTrustAtom = atomWithStorage<IDetailedTrust[]>("detail_trust",[]);