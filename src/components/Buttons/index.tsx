import { MouseEventHandler } from 'react';
import classes from '../index.module.css';
import { ButtonProps } from '../../interfaces'

export default function Button(props: ButtonProps) {
    return <button
        onClick={props.onClick}
        type={props.type}
        className={classes.Button}>
        {props.title}
    </button>
}