import React from "react";
import style from "./Count.module.css"
import {Button} from "./Button";

type CounterPropsType = {
    count: number
    minValue: number
    maxValue: number
    error: string
    tooltip: string
    counterInc: () => void
    counterReset: () => void
    style: string
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    let titleStyles
    if (props.error) {
        titleStyles = `${style.screen} ${style.red}`
    } else if (props.tooltip) {
        titleStyles = style.screen
    } else {
        titleStyles =
            props.maxValue > props.count ?
                `${style.screen} +  ${style.sizeS}` :
                `${style.screen} + ${style.sizeS} + ${style.red}`
    }

    const title = props.error || props.tooltip || props.count

    return (
        <div className={props.style}>
            <div className={titleStyles}>{title}</div>
            <div className={style.buttons}>
                <Button
                    buttonName={"inc"}
                    onClick={props.counterInc}
                    disabled={props.count === props.maxValue || !!props.tooltip}
                />
                <Button
                    buttonName={"reset"}
                    onClick={props.counterReset}
                    disabled={!!props.tooltip}
                />
            </div>
        </div>
    )
}