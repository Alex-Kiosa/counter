import React, {useState} from "react";
import style from  "./Count.module.css"
import {Button} from "./Button";

export const Counter = () => {

    const [count, setCount] = useState(0)

    const minCount = 0;
    const maxCount = 5;

    const onclickHandlerInc = () => {
        setCount(count + 1)
    }

    const onclickHandlerReset = () => {
        setCount(0)
    }

    const counterStyles = count < maxCount ? style.screen : style.screen + " " + style.numberRed

    return (
        <>
            <div className={counterStyles}>{count}</div>
            <div className={style.buttons}>
                <Button
                    buttonName={"inc"}
                    onClickButton={onclickHandlerInc}
                    disabled={count === maxCount}
                />
                <Button
                    buttonName={"reset"}
                    onClickButton={onclickHandlerReset}
                    disabled={count === minCount}
                />
            </div>

        </>
    )
}