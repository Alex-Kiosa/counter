import React, {useState} from "react";
import style from "./Settings.module.css";
import {Button} from "./Button";
import {Input} from "./Input";

type SettingsPropsType = {
    style: string
    minStart: number
    maxStart: number
    error: boolean
    updateMaxStart: (value: number) => void
    updateMinStart: (value: number) => void
    setSettings: () => void
}

export const SettingsDisplay: React.FC<SettingsPropsType> = (props) => {
    return (
        <div className={props.style}>
            <div className={style.settings}>
                <label className={style.settingsItem}>
                    Max value:
                    <Input value={props.maxStart} onChange={props.updateMaxStart}/></label>
                <label className={style.settingsItem}>
                    Min value:
                    <Input value={props.minStart} onChange={props.updateMinStart}/></label>
            </div>
            <div className={style.buttons}>
                <Button
                    buttonName={"set"}
                    onClick={props.setSettings}
                    // disabled={props.maxStart < props.minStart}
                />
            </div>
        </div>
    )
}