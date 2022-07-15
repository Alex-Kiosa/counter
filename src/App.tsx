import React, {useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";

function App() {


    return (
        <div className="app">
            <div className="app-inner">
                <Counter/>
                {/*<div className="app-buttons">*/}
                {/*    <Button*/}
                {/*        buttonName={"inc"}*/}
                {/*        onClickButton={onclickHandlerInc}*/}
                {/*        disabled={count === maxCount}*/}
                {/*    />*/}
                {/*    <Button*/}
                {/*        buttonName={"reset"}*/}
                {/*        onClickButton={onclickHandlerReset}*/}
                {/*        disabled={count === minCount}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
