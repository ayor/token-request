import { ChangeEvent, MouseEventHandler, ReactElement } from "react";
export interface LoginInfo {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export type InputTypes = "email" | "password" | "tel" | "text";

export interface InputProps {
  type: InputTypes;
  label?: string;
  placeholder?: string;
  value: string | number;
  inputClassName?: string;
  labelClassName?: string;
  maxLength?: number;
  minLength?: number;
  showLabel?: boolean;
  onChange: (ev: ChangeEvent) => void;
}

type ButtonTypes = "submit" | "button" | "reset"
export interface ButtonProps {
    type?: ButtonTypes;
    title: string
    onClick?: MouseEventHandler;
}

export interface ModalProps {
  children:  ReactElement;
  open: boolean;
  onCancel?: () => void;
  onVerifyClick?: MouseEventHandler; 
  onResend?: MouseEventHandler; 
}
export interface OtpInputProps extends InputProps {

}

export interface UserData {
  [index: string]: string;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}


export interface AuthProps {
  user: LoginInfo | null;
  children?: React.ReactNode;
}