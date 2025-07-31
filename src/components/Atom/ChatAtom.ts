import { atom } from "jotai";
import type { IChat, Message } from "../../types/types";

export const selectedChatAtom = atom<IChat | null>(null);

export const messageAtom = atom<Record<string, Message[]>>({});

export const newMeaasageAtom = atom<string>("");

export const searchAtom = atom<string>("");
