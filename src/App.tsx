import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { IHomePage } from "@Interfaces";
import { IStore } from "@Reducers/IStore";
import { fetchDataRequested } from "@Reducers/home";
import logo from "./Assets/logo.svg";
import "./App.css";

const App: React.FC<{data?: { text: string }}> = () => {
    const home = useSelector((state: IStore) => state.home);
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataRequested());
    }, [dispatch]);

    useEffect(() => {
        if (home?.data) {
            setText(home.data.text);
        }
    }, [home]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit
                    <code>src/App.tsx</code>
                    {text}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
