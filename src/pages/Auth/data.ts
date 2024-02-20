import { InputTypes } from "@/src/interfaces"

interface FormData {
    id:string; 
    type: InputTypes;
    placeholder?: string;
    label: string;
    handleChangeKey: string;
}

export const FORM_DATA : FormData[] = [
    {
      id:"1011", 
      type: "text",
      placeholder:"John Doe",
      label: "Enter your full name",
      handleChangeKey:"name"
    },
    {
      id:"1012", 
      type: "email",
      placeholder:"example@example.com",
      label: "Enter your Email Address",
      handleChangeKey:"email"
    },
    {
      id:"1013", 
      type: "tel",
      placeholder:"0801122334455",
      label: "Enter your Phone Number",
      handleChangeKey:"phoneNumber"
    },
    {
        id:"1014", 
      type: "password",
      placeholder: undefined,
      label: "Enter your Password",
      handleChangeKey:"password"
    }
  ];