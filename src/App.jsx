import { useState } from 'react'
import './App.css'
import AboutUs from './AboutUs'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="container-home">
                <div className="heading-side">
                    <h1 className="heading-title">Conference Event Planner</h1>
                    <p className="heading-description">Plan your next major event with us!</p>
                    <button id='get-started-btn' onClick={() => handleGetStarted}>Get Started</button>
                </div>
                <div className="main-content">
                    <AboutUs />
                </div>
            </div>
        </>
    )
}

export default App
