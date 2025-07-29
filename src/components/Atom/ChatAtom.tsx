import { atom } from "jotai";

export interface PersonDetails {
  personname: string;
  avatar: string;
  time: string;
}

interface Message {
  text: string;
  id: number;
}

export const selectedPersonNameAtom = atom<string | null>(null);

export const messageAtom = atom<Record<string, Message[]>>({});

export const chatPersonDetailsAtom = atom<PersonDetails | null>(null);

export const newMeaasageAtom = atom<string>("");
