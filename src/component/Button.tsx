import React from "react";
import style from "./Button.module.css"

type PropsType = {
    buttonName: string
    onClickButton: () => void
    disabled: boolean
}

export const Button = (props: PropsType) => {
    return (
        <button
            className={style.button}
            onClick={props.onClickButton}
            disabled={props.disabled}
        >{props.buttonName}</button>
    )
}