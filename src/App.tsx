import React from 'react';
import './App.css';
import {DisplayForm} from "./Componets/Display/DisplayForm";
import {ButtonsGroupForm} from "./Componets/BtnsGroupForm/ButtonsGroupForm";

function App() {
    console.log('App Render')
    return (
        <div className="App">
            <DisplayForm/>
            <ButtonsGroupForm/>
        </div>
    );
}

export default App;
