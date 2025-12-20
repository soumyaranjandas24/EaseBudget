import { useState } from 'react'
import './App.css'
import AboutUs from './AboutUs'
import ConferenceEvent from './ConferenceEvent'

function App() {
    const [showVanue, setShowVenue] = useState(false)
    const handleGetStarted = () => {
        setShowVenue(true)
    }

    return (
        <>
            <div className="container-home">
                <div className="heading-side">
                    <h1 className="heading-title">Conference Event Planner</h1>
                    <p className="heading-description">Plan your next major event with us!</p>
                    <button type='button' className='getStarted-Btn' onClick={() => handleGetStarted()}>Get Started</button>
                </div>
                <div className="main-content">
                    <AboutUs />
                </div>
            </div>
            <div className={`conference-event-main ${showVanue ? 'visible' : ''}`}>
                <ConferenceEvent />
            </div>
        </>
    )
}

export default App
