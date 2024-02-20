import CustomInput from '../index'; 
import classes from '../../index.module.css'
import { OtpInputProps } from '@/src/interfaces';

export const OtpInput = (props: OtpInputProps) => {
    return <CustomInput type="text" value={props.value}  
    inputClassName={classes.OtpInput} onChange={props.onChange}/>
}