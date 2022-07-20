import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";
import {SettingsDisplay} from "./component/SettingsDisplay";

function App() {
    const [minStart, setMinStart] = useState(0)
    const [maxStart, setMaxStart] = useState(1)
    const [count, setCount] = useState(minStart)
    const [error, setError] = useState("")
    const [tooltip, setTooltip] = useState("")
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        debugger
        const newMinStart = localStorage.getItem("minStart")
        const newMaxStart = localStorage.getItem("maxStart")
        if (newMinStart) setMinStart(JSON.parse(newMinStart))
        if (newMaxStart) setMinStart(JSON.parse(newMaxStart))
    }, [])

    debugger

    useEffect(() => {
        localStorage.setItem("minStart", JSON.stringify(minStart))
        localStorage.setItem("maxStart", JSON.stringify(maxStart))
    }, [minStart, maxStart])

    const updateMinStart = (value: number) => {
        setEditMode(true)
        setMinStart(value)
        if (maxStart <= value) {
            setError("inncorect value")
        } else {
            setError("")
            setTooltip("enter values and press 'set'")
        }
    }

    const updateMaxStart = (value: number) => {
        setEditMode(true)
        setMaxStart(value)
        if (minStart >= value) {
            setError("inncorect value")
        } else {
            setError("")
            setTooltip("enter values and press 'set'")
        }
    }

    const onclickInc = () => {
        setCount(count + 1)
    }

    const onclickReset = () => {
        setCount(minStart)
    }

    const updateSettings = () => {
        setCount(minStart)
        setTooltip("")
        setEditMode(false)
    }

    return (
        <div className="app">
            <div className="app-inner">
                <SettingsDisplay
                    updateSettings={updateSettings}
                    minStart={minStart}
                    maxStart={maxStart}
                    error={error}
                    editMode={editMode}
                    updateMinStart={updateMinStart}
                    updateMaxStart={updateMaxStart}
                    style={"box"}
                />
                <Counter
                    count={count}
                    maxCount={maxStart}
                    minCount={minStart}
                    error={error}
                    tooltip={tooltip}
                    onclickInc={onclickInc}
                    onclickReset={onclickReset}
                    style={"box"}
                />
            </div>
        </div>
    );
}

export default App;
