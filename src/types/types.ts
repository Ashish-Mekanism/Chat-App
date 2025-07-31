export interface IChat {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  last_message: string;
  unread_count: number;
  profile_pic: string;
  last_message_time: string;
  last_online: string;
}

export type Sender = "me" | "other";

export interface Message {
  id: number;
  text: string;
  sender: Sender;
}
