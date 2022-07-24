import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./component/counter/Counter";
import {SettingsDisplay} from "./component/settings/SettingsDisplay";

function App() {
    const [maxValue, setMaxValue] = useState(1)
    const [minValue, setMinValue] = useState(0)
    const [count, setCount] = useState(minValue)
    const [error, setError] = useState("")
    const [tooltip, setTooltip] = useState("")
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const newMaxValue = localStorage.getItem("savedMaxValue")
        if (newMaxValue) setMaxValue(JSON.parse(newMaxValue))
    }, [])

    useEffect(() => {
        const newMinValue = localStorage.getItem("savedMinValue")
        if (newMinValue) setMinValue(JSON.parse(newMinValue))
    }, [])

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
        localStorage.setItem("savedMaxValue", JSON.stringify(maxValue))
        localStorage.setItem("savedMinValue", JSON.stringify(minValue))
        setCount(minValue)
        setTooltip("")
        setEditMode(false)
    }

    const defaultSettingsHandler = () => {
        localStorage.clear()
        setMaxValue(1)
        setMinValue(0)
        setCount(0)
    }

    // console.log(savedMinValue)

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
