import { ReactNode } from "react";

export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  email_verification_token?: string;
  created_at: string;
  updated_at: string;
  uuid: string;
  __v: 0;
  email_verified_at?: string;
}
export interface IItem {
  name: string;
  description: string;
  uuid: string;
}

export interface IPageLinkProps {
  children: ReactNode;
  to: string;
}
