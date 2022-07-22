import React from "react";
import style from "./Settings.module.css";
import {Button} from "./Button";
import {Input} from "./Input";

type SettingsPropsType = {
    style: string
    minValue: number
    maxValue: number
    error: string
    editMode: boolean
    updateMaxValue: (value: number) => void
    updateMinValue: (value: number) => void
    updateSettings: () => void
    defaultSettings: () => void
}

export const SettingsDisplay: React.FC<SettingsPropsType> = (props) => {
    return (
        <div className={props.style}>
            <div className={style.settings}>
                <label className={style.settingsItem}>
                    Max value:
                    <Input value={props.maxValue} onChange={props.updateMaxValue}/></label>
                <label className={style.settingsItem}>
                    Min value:
                    <Input value={props.minValue} onChange={props.updateMinValue}/></label>
            </div>
            <div className={style.buttons}>
                <Button
                    buttonName={"set"}
                    onClick={props.updateSettings}
                    disabled={!props.editMode || !!props.error}
                />
                <Button buttonName={"default"} onClick={props.defaultSettings}/>
            </div>
        </div>
    )
}