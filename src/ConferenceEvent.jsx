import React from "react";
import './ConferenceEvent.css'
import { useState } from "react";
import EventItems from "./EventItems";
import { useSelector, useDispatch } from 'react-redux'
import { incrementQuantity, decrementQuantity } from "./venueSlice";
import { incrementAvQuantity, decrementAvQuantity } from "./addOnsSlice";

const ConferenceEvent = () => {
    const [showDetails, setShowDetails] = useState(false)
    const venueItems = useSelector((state) => state.venue)
    const addOnsItems = useSelector((state) => state.addOns)
    const dispatch = useDispatch()
    console.log(venueItems[0].name)

    const handleVenueIncrement = (index) => {
        dispatch(incrementQuantity(index))
    }
    const handleVenueDecrement = (index) => {
        dispatch(decrementQuantity(index))
    }

    const totalCostCalculate = (items) => {
        let totalCost = 0
        items.forEach(item => {
            totalCost += item.cost * item.quantity
        })

        return totalCost
    }

    const venueTotalCost = totalCostCalculate(venueItems)
    const addOnsTotalCost = totalCostCalculate(addOnsItems)

    return (
        <>
            <nav className="navbar">
                <div className="logo"><h2>EaseBudget</h2></div>
                <div className="links">
                    <ul>
                        <li><a href="#venue">Venue</a></li>
                        <li><a href="#addOns">Add-ons</a></li>
                        <li><a href="#meals">Meals</a></li>
                    </ul>
                </div>
                <button className="showDetailsBtn" onClick={() => { setShowDetails(!showDetails) }}>Show Details</button>
            </nav>
            {!showDetails ?
                <div className="conference-main">

                    {/* Venue Room Selection */}
                    <div className="event_items_box" id="venue">
                        <div className="event_items_heading">
                            <h1>Venue Room Selection</h1>
                        </div>
                        <div className="event_items_selection">
                            {venueItems.map((items, index) => (
                                <div key={index} className="venue_item_card">
                                    <div className="venueImage">
                                        <img src={items.img} alt={items.name} />
                                    </div>
                                    <div className="text"><h2>{items.name}</h2></div>
                                    <div className="price"><h3>$ {items.cost}</h3></div>
                                    <div className="quantity">
                                        <button
                                            className={items.quantity === 0 ? "btn-warning btn-disabled" : "btn-success btn-minus"}
                                            onClick={() => handleVenueDecrement(index)}>&#8211;</button>
                                        <span className="quantityValue">{items.quantity}</span>
                                        <button
                                            className={items.quantity === 3 ? "btn-warning btn-disabled" : "btn-success btn-plus"} onClick={() => handleVenueIncrement(index)}>&#43;</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="totalAmount">Total Amount: ${venueTotalCost}</div>
                    </div>

                    {/* Add-ons Selection*/}
                    <div className="event_items_box" id="addOns">
                        <div className="event_items_heading">
                            <h1>Add-ons Selection</h1>
                        </div>
                        <div className="event_items_selection">
                            {addOnsItems.map((items, index) => (
                                <div key={index} className="addOns_item_card">
                                    <div className="addOnsImage">
                                        <img src={items.img} alt={items.name} />
                                    </div>
                                    <div className="text"><h2>{items.name}</h2></div>
                                    <div className="price"><h3>$ {items.cost}</h3></div>
                                    <div className="quantity">
                                        <button
                                            className={items.quantity === 0 ? "btn-warning btn-disabled" : "btn-success btn-minus"}
                                            onClick={() => dispatch(decrementAvQuantity(index))}>&#8211;</button>
                                        <span className="quantityValue">{items.quantity}</span>
                                        <button
                                            className={items.quantity === 3 ? "btn-warning btn-disabled" : "btn-success btn-plus"} onClick={() => dispatch(incrementAvQuantity(index))}>&#43;</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="totalAmount">Total Amount: ${addOnsTotalCost}</div>
                    </div>

                    {/* Meals */}
                    <div className="event_items_box" id="meals">
                        <div className="event_items_heading">
                            <h1>Meals Selection</h1>
                        </div>
                        <div className="checkPeopleCount">
                            <label htmlFor="people">Number of people:</label>
                            <input type="number" name="people" id="people" placeholder="0" />
                        </div>
                        <div className="meals_container">
                            <label><input className="meals" type="checkbox" name="checkbox" id="meal01" /> meal01</label>
                            <label><input className="meals" type="checkbox" name="checkbox" id="meal02" /> meal02</label>
                            <label><input className="meals" type="checkbox" name="checkbox" id="meal03" /> meal03</label>
                            <label><input className="meals" type="checkbox" name="checkbox" id="meal04" /> meal04</label>
                        </div>
                        <div className="totalAmount">Total Amount: ${mealsTotalCost}</div>
                    </div>
                </div >
                :
                <div className="totalAmountDisplay">
                    Total amount
                </div>
            }
        </>
    )
}

export default ConferenceEvent