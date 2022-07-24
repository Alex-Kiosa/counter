import React, {ChangeEvent} from "react";
import style from "./Input.module.css"

type InputPropsType = {
    value: number
    onChange: (number: number) => void
}

export const Input : React.FC<InputPropsType> = (props) => {
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+e.currentTarget.value)
    }

    return (
        <input
            onChange={changeValue}
            value={props.value}
            type="number"
            min={0}
            className={style.input}
        />
    )
}