import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";
import {SettingsDisplay} from "./component/SettingsDisplay";

function App() {
    const [minStart, setMinStart] = useState(0)
    const [maxStart, setMaxStart] = useState(2)
    const [count, setCount] = useState(minStart)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        localStorage.setItem("minStart", JSON.stringify(minStart))
        localStorage.setItem("maxStart", JSON.stringify(maxStart))
    }, [minStart, maxStart])

    const setSettings = () => {
        // localStorage.getItem("minStart")
        // localStorage.getItem("maxStart")
        setCount(minStart)
    }

    const updateMinStart = (value: number) => {
        setMinStart(value)
        if (maxStart <= value) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const updateMaxStart = (value: number) => {
        setMaxStart(value)
        if (minStart >= value){
            setError(true)
        } else {
            setError(false)
        }
    }

    const onclickInc = () => {
        setCount(count + 1)
    }

    const onclickReset = () => {
        setCount(minStart)
    }

    return (
        <div className="app">
            <div className="app-inner">
                <SettingsDisplay
                    setSettings={setSettings}
                    minStart={minStart}
                    maxStart={maxStart}
                    error={error}
                    updateMinStart={updateMinStart}
                    updateMaxStart={updateMaxStart}
                    style={"box"}
                />
                <Counter
                    count={count}
                    maxCount={maxStart}
                    minCount={minStart}
                    error={error}
                    onclickInc={onclickInc}
                    onclickReset={onclickReset}
                    style={"box"}
                />
            </div>
        </div>
    );
}

export default App;
