import { ChangeEvent } from "react";
import classes from '../index.module.css'; 
import { InputProps } from "@/src/interfaces";

const Input = (props: InputProps) => {
    return <div className={classes.InputContainer}>
   { props.showLabel &&  <label className={classes.Label} >{props.label}</label>}
    <input 
    type={props.type}
    value={props.value}
    minLength={props.minLength}
    maxLength={props.maxLength}
    onChange={props.onChange}
    placeholder={props.placeholder}
    className={props.inputClassName}/>

    </div>
}


export default Input; 

