import React, {useEffect} from "react";
import "./App.scss"

export function App() {

    const URL = window.RANDOM_USER_API

    useEffect(() => {
        fetch(URL).then(resp => resp.json()).then(console.log)
    }, [])

    return (
        <div className="container">
            <h1>Hello React</h1>
            <a href="" className="btn">Click Me</a>
        </div>
    )
}

export default App;
