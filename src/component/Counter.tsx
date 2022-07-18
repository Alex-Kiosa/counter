import React, {useState} from "react";
import style from "./Count.module.css"
import {Button} from "./Button";

type CounterPropsType = {
    count: number
    minCount: number
    maxCount: number
    error: boolean
    onclickInc: () => void
    onclickReset: () => void
    style: string
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const counterStyles = props.count < props.maxCount ? style.screen : style.screen + " " + style.numberRed

    return (
        <div className={props.style}>
            <div className={counterStyles}>{!props.error ? props.count : props.error}</div>
            <div className={style.buttons}>
                <Button
                    buttonName={"inc"}
                    onClick={props.onclickInc}
                    disabled={props.count === props.maxCount}
                />
                <Button
                    buttonName={"reset"}
                    onClick={props.onclickReset}
                    // disabled={props.count === props.minCount} - need to fix
                />
            </div>
        </div>
    )
}