import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";
import {SettingsDisplay} from "./component/SettingsDisplay";

function App() {
    let savedMaxValue = 1
    let savedMinValue = 0
    const [maxValue, setMaxValue] = useState(1)
    const [minValue, setMinValue] = useState(0)
    const [count, setCount] = useState(minValue)
    const [error, setError] = useState("")
    const [tooltip, setTooltip] = useState("")
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const newMaxValue = localStorage.getItem("savedMaxValue")
        if (newMaxValue) setMaxValue(JSON.parse(newMaxValue))
    }, [savedMaxValue])

    useEffect(() => {
        const newMinValue = localStorage.getItem("savedMinValue")
        if (newMinValue) setMinValue(JSON.parse(newMinValue))
    }, [savedMinValue])

    const updateMinValueHandler = (value: number) => {
        setEditMode(true)
        setMinValue(value)
        if (maxValue <= value) {
            setError("incorrect value")
        } else {
            setError("")
            setTooltip("enter values and press 'set'")
        }
    }

    const updateMaxValueHandler = (value: number) => {
        setEditMode(true)
        setMaxValue(value)
        if (minValue >= value) {
            setError("incorrect value")
        } else {
            setError("")
            setTooltip("enter values and press 'set'")
        }
    }

    const counterIncHandler = () => setCount(count + 1)

    const counterResetHandler = () => setCount(minValue)

    const updateSettingsHandler = () => {
        savedMaxValue = maxValue
        savedMinValue = minValue
        localStorage.setItem("savedMaxValue", JSON.stringify(savedMaxValue))
        localStorage.setItem("savedMinValue", JSON.stringify(savedMinValue))
        setCount(minValue)
        setTooltip("")
        setEditMode(false)
    }

    const defaultSettingsHandler = () => {
        localStorage.clear()
        setMaxValue(savedMaxValue)
        setMinValue(savedMinValue)
        setCount(savedMinValue)
    }

    return (
        <div className="app">
            <div className="app-inner">
                <SettingsDisplay
                    updateSettings={updateSettingsHandler}
                    minValue={minValue}
                    maxValue={maxValue}
                    error={error}
                    editMode={editMode}
                    updateMinValue={updateMinValueHandler}
                    updateMaxValue={updateMaxValueHandler}
                    defaultSettings={defaultSettingsHandler}
                    style={"box"}
                />
                <Counter
                    count={count}
                    maxValue={maxValue}
                    minValue={minValue}
                    error={error}
                    tooltip={tooltip}
                    counterInc={counterIncHandler}
                    counterReset={counterResetHandler}
                    style={"box"}
                />
            </div>
        </div>
    );
}

export default App;
