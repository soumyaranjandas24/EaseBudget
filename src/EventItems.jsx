import React from "react";

const EventItems = (props) => {
    return (
        <div className="event_items_box" id={props.id}>
            <div className="event_items_heading">
                <h1>{props.heading}</h1>
            </div>
            <div className="event_items_selection">
                {props.venueItems.map((items) => {
                    <div>{items.name}</div>
                })}
            </div>
            <div className="totalAmount">Total Amount:</div>
        </div>
    )
}

export default EventItems